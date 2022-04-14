const { TYPES, DIGIMON } = require('../libs/constants/digimonDb');
const { DigimonModel } = require('../models/digimon');

class DigimonController {
    static async getOneDigionById(request, response) {
        try {
            const { id } = request.query;
            const digimon = await Promise.all([DigimonModel.getOneById(+id)]);
            return response.json({digimon});
        } catch (error) {
            const err = JSON.parse(error.message)
            response.status(err.status).json(err);
        }
    }
    static async getAllDigimons(req, res) {
        const [digimons] = await Promise.all([DigimonModel.getAll()]);
        return res.json({
            digimons
        });
    }
}

module.exports = { DigimonController }
