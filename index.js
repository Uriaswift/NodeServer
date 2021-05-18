const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8081;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//-----------------------------------------------------------
const reactData = {
    total: 10,
    items: [
        {   strDrink: "155 Belmont",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
            idDrink: "15346"
        },
        {
            strDrink:"57 Chevy with a White License Plate",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
            idDrink:"14029"
        },
        {   strDrink:"747 Drink",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg",
            idDrink:"178318"
        },
        {   strDrink:"9 1/2 Weeks",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
            idDrink:"16108"
        },
        {   strDrink:"A Gilligan's Island",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
            idDrink:"16943"
        },
        {   strDrink:"A True Amaretto Sour",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
            idDrink:"17005"
        },
        {   strDrink:"A.D.M. (After Dinner Mint)",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
            idDrink:"14560"
        },
        {   strDrink:"A1",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            idDrink:"17222"
        },
        {   strDrink: "Abbey Martini",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
            idDrink: "17223"
        },
        {   strDrink:"Absolut Summertime",
            strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
            idDrink:"14107"
        }]
}
const dataInfo = [
    {
        id: 1,
        name: "John",
        surname: "Fris",
        phone: "5556194558",
        address: 'Westside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/930.jpg'
    },
    {
        id: 2,
        name: "Steve",
        surname: "Jobs",
        phone: "5557503664",
        address: 'Eastside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/929.jpg'
    },
    {
        id: 3,
        name: "Ram",
        surname: "Kapoor",
        phone: "5554063754",
        address: 'Northside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/928.jpg'
    },
    {
        id: 4,
        name: "Bill",
        surname: "Gates",
        phone: "5556816585",
        address: 'Westside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/927.jpg'
    },
    {
        id: 5,
        name: "Moin",
        surname: "Khan",
        phone: "5555875011",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/926.jpg'
    },
    {
        id: 6,
        name: "Naruto",
        surname: "Uzumaki",
        phone: "5552875232",
        address: 'Northside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/925.jpg'
    },
    {
        id: 7,
        name: "Sasuke",
        surname: "Uchiha",
        phone: "5556727160",
        address: 'Westside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/924.jpg'
    },
    {
        id: 8,
        name: "Sakura",
        surname: "Haruno",
        phone: "5551125588",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/923.jpg'
    },
    {
        id: 9,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/922.jpg'
    },
    {
        id: 10,
        name: "Itachi",
        surname: "Uchiha",
        phone: "5559987698",
        address: 'Eastside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/921.jpg'
    },
    {
        id: 11,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/920.jpg'
    },
    {
        id: 12,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/919.jpg'
    },
    {
        id: 13,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/918.jpg'
    },
    {
        id: 14,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {
        id: 15,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/916.jpg'
    },
    {
        id: 16,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {
        id: 17,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {
        id: 18,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {
        id: 19,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/931.jpg'
    },
    {
        id: 20,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/932.jpg'
    }
]
const dataTree = {
    1: {name: "John1", surname: "Fris1", phone: "5556194558", parent: 'root', leaf: false},
    2: {name: "Steve1", surname: "Jobs1", phone: "5557503664", parent: 1, leaf: true},
    3: {name: "Ram1", surname: "Kapoor1", phone: "5554063754", parent: 1, leaf: true},
    4: {name: "Bill1", surname: "Gates1", phone: "5556816585", parent: 1, leaf: true},
    5: {name: "Moin1", surname: "Khan1", phone: "5555875011", parent: 1, leaf: true},
    6: {name: "John2", surname: "Fris2", phone: "5556194558", parent: 'root', leaf: false},
    7: {name: "Steve2", surname: "Jobs2", phone: "5557503664", parent: 6, leaf: true},
    8: {name: "Ram2", surname: "Kapoor2", phone: "5554063754", parent: 6, leaf: true},
    9: {name: "Bill2", surname: "Gates2", phone: "5556816585", parent: 6, leaf: true},
    10: {name: "Moin2", surname: "Khan2", phone: "5555875011", parent: 6, leaf: true}
};

/*app.get('node/api/windowStore', (request, response) => {
    const json = {
        total: 20,
        items: [
            {   id: 1,
                name: "John",
                surname: "Fris",
                phone: "5556194558",
                address: 'Westside'
            },
            {
                id: 2,
                name: "Steve",
                surname: "Jobs",
                phone: "5557503664",
                address: 'Eastside'
            },
            {   id: 3,
                name: "Ram",
                surname: "Kapoor",
                phone: "5554063754",
                address: 'Northside'
            },
            {   id: 4,
                name: "Bill",
                surname: "Gates",
                phone: "5556816585",
                address: 'Westside'
            },
            {   id: 5,
                name: "Moin",
                surname: "Khan",
                phone: "5555875011",
                address: 'Southside'
            },
            {   id: 6,
                name: "Naruto",
                surname: "Uzumaki",
                phone: "5552875232",
                address: 'Northside'
            },
            {   id: 7,
                name: "Sasuke",
                surname: "Uchiha",
                phone: "5556727160",
                address: 'Westside'
            },
            {   id: 8,
                name: "Sakura",
                surname: "Haruno",
                phone: "5551125588",
                address: 'Southside'
            },
            {   id: 9,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 10,
                name: "Itachi",
                surname: "Uchiha",
                phone: "5559987698",
                address: 'Eastside'
            },
            {   id: 11,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 12,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 13,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 14,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 15,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 16,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 17,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 18,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 19,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            },
            {   id: 20,
                name: "Kakashi",
                surname: "Hatake",
                phone: "5559667564",
                address: 'Southside'
            }
        ]
    };
    response.send(json);
});*/
app.get('/node/api/treeStore', (req, res) => {
    const node = req.query.node;
    const result = [];
    const keys = Object.keys(dataTree);
    for (let index = 0; index < keys.length; index++) {
        const id = keys[index];
        const row = dataTree[id];
        row.id = id;
        if (row.parent == req.query.node) {
            result.push(row);
        }
    }
    res.json({
        total: result.length,
        result: result
    });
});
app.get('/node/api/newStore', (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    res.json({
        total: dataInfo.length,
        items: dataInfo.slice(startIndex, endIndex)
    });
});
app.get('/node/api/reactData', (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    res.json({
        total: reactData.length,
        items: reactData
    });
});

//wswsw
/*app.get('/node/api/info', (request, response) => {
    const json = {
        data: [],
        TotalCount: 0
    };
    const start = request.query.start || 0;
    const page = request.query.page || 1;
    const count = request.query.count || 10;
    for (let key = start * count; key < (start + page) * count; key++) {
        const record = dataInfo[key];
        if (record) {
            record.id = key;
            json.data.push(record);
            json.TotalCount++;
        }
    }
    response.send(json);
});*/
// Запрос данных с пейджингом
/*
app.get('/node/api/newStore', (request, response) => {
    const json = {
        items: [],
        total: Object.keys(dataInfo).length
    };
    const start = request.query.start || 0;
    const page = request.query.page || 4;
    const count = request.query.count || 6;
    //for (let key = start * count; key < (start + page) * count; key++) {
    for (let key = start; key < (start + 1) * count; key++) {
        const record = dataInfo[key];
        if (record) {
            record.id = key;
            json.items.push(record);
        }
    }
    response.send(json);
});
*/
// Добавление/Обновление данных
app.post('/node/api/newStore', (request, response) => {
    if (!request.body) {
        response.send({result: "Request body is empty"});
        return;
    }
    let id = request.body.id;
    if (id) {
        // У новой записи ИД в формате: "ClearApp.app.model.ComboModel-1", меняем на целое свободное число
        if (isNaN(id)) {
            id = 1;
            const keys = Object.keys(dataInfo);
            for (let i = 0; i < keys.length; i++) {
                if (id <= +keys[i]) {
                    id = +keys[i] + 1;
                }
            }
        }
        let item = dataInfo[id] || {};
        const keys = Object.keys(request.body);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (key !== "id") {
                item[key] = request.body[key];
                //console.log(`id: ${id}, key: ${key}, ${request.body[key]}`);
            }
        }
        dataInfo[id] = item;
    } else {
        request.body.forEach(function (record) {
            let item = dataInfo[record.id] || {};
            const keys = Object.keys(record);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (key !== "id") {
                    item[key] = record[key];
                    console.log(`id: ${record.id}, key: ${key}, ${record[key]}`);
                }
            }
            dataInfo[record.id] = item;
        });
    }
    response.send({result: "Ok"});
});