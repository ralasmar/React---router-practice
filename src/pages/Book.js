import React from 'react'
import { useOutletContext, useParams } from "react-router-dom"
//useParams is custom hook with react router, takes no params, will return an object that has all custom parameters we defined (key of id and whatever value id is given)

export function Book(){
    const { id } = useParams()
    const obj = useOutletContext()
    return <h1>Book {id} {obj.hello}</h1>
}