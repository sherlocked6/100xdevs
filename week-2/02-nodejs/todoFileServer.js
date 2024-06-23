const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());

todos = []

app.get('/todos', (req,res) => {
    fs.readFile('todos.json', 'utf-8',(err,data) => {
        res.json(JSON.parse(data))
    })
})

app.post('/todos', (req,res) => {
    const todo = {
        id: Math.floor(Math.random() * 1000000), // unique random id
        title: req.body.title,
        description: req.body.description
      };

    fs.readFile('todos.json', 'utf-8', (err,data) => {
        if(err) throw err;
        const todos = JSON.parse(data);
        todos.push(todo);
        fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
            if (err) throw err;
            res.status(200).json(todo);
        });
    });
})

app.get('/todos/:id', (req,res) => {
    fs.readFile('todos.json', 'utf-8', (err,data) => {
        const todos = JSON.parse(data);

        todo = todos.find(t => t.id === parseInt(req.params.id));

        if(!todo){
            res.status(404).send("ID invalid")
        }
        else{
            res.json(todo)
        }
    })  
})

app.listen(3000);