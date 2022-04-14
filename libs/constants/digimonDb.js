const TYPES = {
    fire: 'fire',
    water: 'water',
    figth: 'figth'
};

const DIGIMON = [
    {
        id: 1,
        name: 'Agumon',
        damage: 500,
        type: TYPES.fire
    },
    {
        id: 2,
        name: 'Gomamon',
        damage: 400,
        type: TYPES.water
    }
];

module.exports = {
    DIGIMON,
    TYPES
}
