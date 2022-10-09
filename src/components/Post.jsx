import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function Post(){
    let [postEl, setBody] = useState(null)

    useEffect(() => {
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setBody(data))
        }, 0);
    },[])

    return (
        <div>
            {postEl && postEl.map(el => 
            <div key={el.id}>
                <h1>{el.id}.{el.title}</h1>
                <p>{el.body}</p>
            </div>
            )}
        </div>
    )
}

export default Post