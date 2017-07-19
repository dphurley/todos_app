const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const todosController = require('./controllers/todos_controller');
app.use('/todos', todosController);

const usersController = require('./controllers/users_controller');
app.use('/users', usersController);

const notesController = require('./controllers/notes_controller')
app.use('/notes', notesController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Express app running in port ' + 3000);
})