import React, { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    
    return <div>


        <input id="title" style={{
            padding : 10,
            margin : 10,
            borderRadius : 5,
        }} type = "text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input> <br />


        <input id="description" style={{
            padding : 10,
            margin : 10,
            borderRadius : 5,
        }} type = "text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input> <br />  

        <button onClick={() => {
            fetch("http://localhost:300/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description : description

                }),
                headers: {
                    "Content-Type": "application/json"
                }
                
            })
                .then(async function(response){
                    const json = await response.json();
                    alert("Todo added")
                })
            }}>Create Todo</button>     
    </div>
}