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
const dataInfo = [
    {   id: 1,
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
    {   id: 3,
        name: "Ram",
        surname: "Kapoor",
        phone: "5554063754",
        address: 'Northside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/928.jpg'
    },
    {   id: 4,
        name: "Bill",
        surname: "Gates",
        phone: "5556816585",
        address: 'Westside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/927.jpg'
    },
    {   id: 5,
        name: "Moin",
        surname: "Khan",
        phone: "5555875011",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/926.jpg'
    },
    {   id: 6,
        name: "Naruto",
        surname: "Uzumaki",
        phone: "5552875232",
        address: 'Northside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/925.jpg'
    },
    {   id: 7,
        name: "Sasuke",
        surname: "Uchiha",
        phone: "5556727160",
        address: 'Westside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/924.jpg'
    },
    {   id: 8,
        name: "Sakura",
        surname: "Haruno",
        phone: "5551125588",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/923.jpg'
    },
    {   id: 9,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/922.jpg'
    },
    {   id: 10,
        name: "Itachi",
        surname: "Uchiha",
        phone: "5559987698",
        address: 'Eastside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/921.jpg'
    },
    {   id: 11,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/920.jpg'
    },
    {   id: 12,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/919.jpg'
    },
    {   id: 13,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/918.jpg'
    },
    {   id: 14,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {   id: 15,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/916.jpg'
    },
    {   id: 16,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {   id: 17,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {   id: 18,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/917.jpg'
    },
    {   id: 19,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/931.jpg'
    },
    {   id: 20,
        name: "Kakashi",
        surname: "Hatake",
        phone: "5559667564",
        address: 'Southside',
        avatar: 'http://www.avotarov.ru/picture/avatar-64/kartinki/932.jpg'
    }
]

app.get('node/api/windowStore', (request, response) => {
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