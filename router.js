import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
export const router = express.Router();

const fetchData = async()=>{
    
}

router.get("/todos",async(req,res)=>{

    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await data.json();
        result.forEach(element => {
            delete element.userId;
        });
    res.send(result);
    } catch (error) {
        console.log(error)
    }
});

router.get("/users/:id",async(req,res)=>{
    
    try {
        const req_id = req.params.id;
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await data.json();

        const findUser = (element)=>{
             if(element.id == req_id)
             return element;
    }
        const user = result.find(findUser);

        const todo = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todoData = await todo.json();
        
        const todoResult = todoData.filter(element => {
               if(element.userId == req_id)
               return element;
        });
        
        todoResult.forEach(element=>{
            delete element.userId
        })
        
        const userTodo ={
        id: req_id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        todos: todoResult
    }
        res.send(userTodo);
    } catch (error) {
        console.log(error)
    }
})

