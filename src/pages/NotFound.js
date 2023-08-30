import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate =useNavigate()
    
    //after one second on notfound page it'll take you back home
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }, [])
    
    return <h1>NotFound</h1>
}