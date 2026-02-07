jest.mock('../../persistence', () => ({
    getItem: jest.fn(),
    getItemByWordName: jest.fn(),
}));

const db = require('../../persistence');
const getItemByWord = require('../getItemByWord');

const automatonRow = [{ id: 999, word: 'Automaton', definition: 'A soulless machine...' }];

function mockReqRes(id, word) {
    const req = { params: { id, word } };
    const res = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
    };
    return { req, res };
}

describe('getItemByWord', () => {
    afterEach(() => jest.clearAllMocks());

    it('returns the item when the word matches exactly', async () => {
        const rows = [{ id: 1, word: 'Glacies' }];
        db.getItem.mockResolvedValue(rows);

        const { req, res } = mockReqRes('1', 'Glacies');
        await getItemByWord(req, res);

        expect(db.getItem).toHaveBeenCalledWith('1');
        expect(res.send).toHaveBeenCalledWith(rows);
        expect(res.status).not.toHaveBeenCalled();
    });

    it('matches case-insensitively', async () => {
        const rows = [{ id: 1, word: 'Glacies' }];
        db.getItem.mockResolvedValue(rows);

        const { req, res } = mockReqRes('1', 'glacies');
        await getItemByWord(req, res);

        expect(res.send).toHaveBeenCalledWith(rows);
    });

    it('returns Automaton when the word does not match', async () => {
        const rows = [{ id: 1, word: 'Glacies' }];
        db.getItem.mockResolvedValue(rows);
        db.getItemByWordName.mockResolvedValue(automatonRow);

        const { req, res } = mockReqRes('1', 'Ignis');
        await getItemByWord(req, res);

        expect(db.getItemByWordName).toHaveBeenCalledWith('Automaton');
        expect(res.send).toHaveBeenCalledWith(automatonRow);
        expect(res.status).not.toHaveBeenCalled();
    });

    it('returns Automaton when the item does not exist', async () => {
        db.getItem.mockResolvedValue([]);
        db.getItemByWordName.mockResolvedValue(automatonRow);

        const { req, res } = mockReqRes('999', 'Glacies');
        await getItemByWord(req, res);

        expect(db.getItemByWordName).toHaveBeenCalledWith('Automaton');
        expect(res.send).toHaveBeenCalledWith(automatonRow);
    });

    it('returns Automaton when db returns null', async () => {
        db.getItem.mockResolvedValue(null);
        db.getItemByWordName.mockResolvedValue(automatonRow);

        const { req, res } = mockReqRes('999', 'Glacies');
        await getItemByWord(req, res);

        expect(res.send).toHaveBeenCalledWith(automatonRow);
    });

    it('falls back to 404 when Automaton is also missing', async () => {
        db.getItem.mockResolvedValue([]);
        db.getItemByWordName.mockResolvedValue([]);

        const { req, res } = mockReqRes('999', 'Glacies');
        await getItemByWord(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
    });
});
