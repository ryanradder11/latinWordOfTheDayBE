jest.mock('../../persistence', () => ({
    getItem: jest.fn(),
}));

const db = require('../../persistence');
const getItemByWord = require('../getItemByWord');

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

    it('returns 404 when the word does not match', async () => {
        const rows = [{ id: 1, word: 'Glacies' }];
        db.getItem.mockResolvedValue(rows);

        const { req, res } = mockReqRes('1', 'Ignis');
        await getItemByWord(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({ error: 'Word does not match' });
    });

    it('returns 404 when the item does not exist', async () => {
        db.getItem.mockResolvedValue([]);

        const { req, res } = mockReqRes('999', 'Glacies');
        await getItemByWord(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({ error: 'Item not found' });
    });

    it('returns 404 when db returns null', async () => {
        db.getItem.mockResolvedValue(null);

        const { req, res } = mockReqRes('999', 'Glacies');
        await getItemByWord(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({ error: 'Item not found' });
    });
});
