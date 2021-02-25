const express = require('express');
const MongoUtil = require('./MongoUtil')
const cors = require('cors')
require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;

let app = express();
app.use(express.json());
app.use(cors());

main = async () => {
    const DBNAME = 'todo_list';
    let db = await MongoUtil.connect(mongoUrl, DBNAME);
    console.log('Database connected')

    // GET
    try {
        app.get('/task', async (req, res) => {
            let result = await db.collection('tasks').find({}).toArray()
            res.status(200)
            res.send(result)
        })
    } catch (e) {
        res.status(500)
        console.log(e)
    }

    // POST
    try {
        app.post('/task', async (req, res) => {
            let title = req.body.title;
            let done = req.body.done;
            let result = await db.collection('tasks').insertOne({
                'title': title,
                'done': done
            })
            res.status(200)
            res.send(result)
        })
    } catch (e) {
        res.status(500)
        console.log(e)
    }

    // PUT
    try {
        app.put('/task', async (req, res) => {
            // let title = req.body.title;
            // let done = req.body.done;
            // let result = await db.collection('tasks').updateOne({
            //     'title': title,
            //     'done': done
            // })
            // res.status(200)
            // res.send(result)
        })
    } catch (e) {
        res.status(500)
        console.log(e)
    }


}

main();

let port = 3100
app.listen(port, () => {
    console.log('Server has started listening on port ' + port)
})