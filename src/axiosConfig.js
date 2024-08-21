import axios from "axios";

export const  axoisInstance=axios.create({
    baseURL:'https://tzqnlpfh-3000.inc1.devtunnels.ms',
    headers:{
        "Content-Type":"application/json"
    },
})