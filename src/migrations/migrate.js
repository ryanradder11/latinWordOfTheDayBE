const fs = require('fs');
const path = require('path');

const MIGRATIONS_DIR = path.join(__dirname);
const MIGRATION_TABLE = 'flyway_schema_history';

async function ensureMigrationTable(client) {
    await client.query(`
        CREATE TABLE IF NOT EXISTS ${MIGRATION_TABLE} (
            installed_rank SERIAL PRIMARY KEY,
            version VARCHAR(50) NOT NULL,
            description VARCHAR(200) NOT NULL,
            script VARCHAR(1000) NOT NULL,
            installed_on TIMESTAMP DEFAULT NOW(),
            success BOOLEAN NOT NULL DEFAULT TRUE
        );
    `);
}

async function getAppliedMigrations(client) {
    const res = await client.query(
        `SELECT version FROM ${MIGRATION_TABLE} WHERE success = TRUE`,
    );
    return new Set(res.rows.map((r) => r.version));
}

function parseMigrationFilename(filename) {
    // Matches Flyway naming: V1__description.sql
    const match = filename.match(/^V(\d+)__(.+)\.sql$/);
    if (!match) return null;
    return {
        version: match[1],
        description: match[2].replace(/_/g, ' '),
        filename,
    };
}

async function runMigrations(client) {
    await ensureMigrationTable(client);
    const applied = await getAppliedMigrations(client);

    const files = fs
        .readdirSync(MIGRATIONS_DIR)
        .filter((f) => f.endsWith('.sql'))
        .sort();

    const pending = files
        .map(parseMigrationFilename)
        .filter((m) => m && !applied.has(m.version));

    if (pending.length === 0) {
        console.log('Migrations: all up to date');
        return;
    }

    for (const migration of pending) {
        const sql = fs.readFileSync(
            path.join(MIGRATIONS_DIR, migration.filename),
            'utf8',
        );
        console.log(
            `Migrations: applying V${migration.version} - ${migration.description}`,
        );

        try {
            await client.query(sql);
            await client.query(
                `INSERT INTO ${MIGRATION_TABLE} (version, description, script, success) VALUES ($1, $2, $3, TRUE)`,
                [migration.version, migration.description, migration.filename],
            );
            console.log(`Migrations: V${migration.version} applied`);
        } catch (err) {
            await client.query(
                `INSERT INTO ${MIGRATION_TABLE} (version, description, script, success) VALUES ($1, $2, $3, FALSE)`,
                [migration.version, migration.description, migration.filename],
            );
            console.error(
                `Migrations: V${migration.version} FAILED:`,
                err.message,
            );
            throw err;
        }
    }

    console.log(`Migrations: ${pending.length} migration(s) applied`);
}

module.exports = { runMigrations };
