
const mdb = {
    users:[
        {
            id:1,
            name:'John',
            age: 18,
            items:[1,1,1]
        },
        {
            id:2,
            name:'Sarah',
            age:22,
            items:[2,1]
        },
        {
            id: 3,
            name: 'Mark',
            age: 40,
            items: []
        }
    ],
    items:[
        {
            id: 1,
            name: 'sword',
            slot: 'hand',
            power: {
                atk: 12,
                def: 0,
                spd: 0,
            }
        },
        {
            id: 2,
            name: 'shield',
            slot: 'hand',
            power: {
                atk: 0,
                def: 10,
                spd: -1,
            }
        }
    ],
}

export default mdb