import axios from "axios";
import { useEffect, useState } from "react";


const useGet = (url) => {
        const [data , setData] = useState([]);
    async function getData() {
        try{
            let res = await axios.get(`https://693d1ae6f55f1be79301e90f.mockapi.io/${url}`)
            setData(res.data)
        }catch(err){
console.log(err);
        }
    }
    useEffect(() => {
        getData()
    },[url])
    return{data}
}

export default useGet;