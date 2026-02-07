jest.mock('../../persistence', () => ({
    init: jest.fn().mockResolvedValue(),
    teardown: jest.fn().mockResolvedValue(),
    getItem: jest.fn(),
    getItems: jest.fn(),
    getItemByDay: jest.fn(),
    getRandomItem: jest.fn(),
    storeItem: jest.fn(),
    updateItem: jest.fn(),
    removeItem: jest.fn(),
}));

const request = require('supertest');
const app = require('../../index');
const db = require('../../persistence');

describe('GET /items/:id/:word (integration)', () => {
    afterEach(() => jest.clearAllMocks());

    it('returns 200 and the item when id and word match', async () => {
        const rows = [{ id: 42, word: 'Glacies', definition: 'Ice' }];
        db.getItem.mockResolvedValue(rows);

        const res = await request(app).get('/items/42/Glacies');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(rows);
    });

    it('returns 200 with case-insensitive word', async () => {
        const rows = [{ id: 42, word: 'Glacies', definition: 'Ice' }];
        db.getItem.mockResolvedValue(rows);

        const res = await request(app).get('/items/42/glacies');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(rows);
    });

    it('returns 404 when word does not match', async () => {
        const rows = [{ id: 42, word: 'Glacies', definition: 'Ice' }];
        db.getItem.mockResolvedValue(rows);

        const res = await request(app).get('/items/42/Ignis');

        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Word does not match');
    });

    it('returns 404 when id does not exist', async () => {
        db.getItem.mockResolvedValue([]);

        const res = await request(app).get('/items/999/Glacies');

        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Item not found');
    });

    it('still serves GET /items/:id without word', async () => {
        const rows = [{ id: 42, word: 'Glacies', definition: 'Ice' }];
        db.getItem.mockResolvedValue(rows);

        const res = await request(app).get('/items/42');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(rows);
    });
});
