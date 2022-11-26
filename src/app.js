//? Dependencies
const express = require('express')

const db = require('./utils/database')
const taskRouter = require('../src/tasks/task.router')

//? Initial configs
const port = 9000
const app = express()
//? Habilitar recibir formato JSON
app.use(express.json())

db.authenticate()
    .then(() => console.log('Database Autenticada Correctamente'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Data base Sincronizada Correctamente'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})


//? /todo  /todo/:id
//? Rutas de TODO's
/* 
app.get('/todo', (req, res) => {
    res.status(200).json(todoDB)
})
 */
/* 
app.post('/todo', (req, res) => {
    const {title, description} = req.body
    //axios.post('localhost:9000/post', {title: 'hola', description: 'asd'})

    if(title && description){
        const newTodo = {
            id: id++,
            title,
            description,
            is_completed: false
        }
        todoDB.push(newTodo)
        res.status(200).json(newTodo)
    } else {
        res.status(400).json({message: 'Invalid data'})
    }
})
 */
/* 
app.get('/todo/:id', (req, res) => {
    const id = req.params.id;

    const todo = todoDB.find(item => item.id == id)

    if(todo){
        res.status(200).json(todo)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
})
 */

app.use('/', taskRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
