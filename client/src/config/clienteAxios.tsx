import React from 'react'
import axios from 'axios'


export const clienteAxios =  axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
}) 


