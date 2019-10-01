import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000', 
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT, OPTIONS',
        'Content-Type': 'application/json'
    }
});