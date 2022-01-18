import React from 'react'
import { useParams } from 'react-router-dom'

const ListTodos = () => {
    const data = useParams()
    console.log(data.listID);
    return (
        <div>
            <h1>{data.listID}</h1>
        </div>
    )
}

export default ListTodos
