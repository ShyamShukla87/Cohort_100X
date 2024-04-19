const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"

}))



app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsedPayLoad = createTodo.parse(createPayload);
    if(!parsedPayLoad.success){
        res.status(411).json({msg:"Invalid Data"})
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({msg:"Todo Created"})

});

app.get('/todos', async(req, res) => {
    const todos = await todo.find();
    res.json({todos});
    
});

app.put('/completed', async (req, res) => {
    const createPayload = req.body;
    const parsedPayLoad = updateTodo.parse(createPayload);
    if(!parsedPayLoad.success){
        res.status(411).json({msg:"Invalid Data"})
        return
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })

    res.json({msg:"Todo marked as completed"})
});


const port=3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});