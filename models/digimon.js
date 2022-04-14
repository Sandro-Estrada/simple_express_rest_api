const { DIGIMON } = require('../libs/constants/digimonDb');

class DigimonModel {
    static async getOneById(id = 0) {
        const digimon = DIGIMON.find(digi => digi.id === id);
        console.log(digimon)
        if (!digimon) {
            throw new Error(JSON.stringify({status: 404, message: 'not found'}))
        }
        return digimon;
    }
    static async getAll() {
        return DIGIMON;
    }
}

module.exports = { DigimonModel };
