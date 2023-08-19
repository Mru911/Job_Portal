import { useState,useEffect } from "react";
import axios from "axios";

const useFetch =(endpoint,query)=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key':'aabb12d407msha73e29c3eaddf8bp17ddb0jsnf1c9d10918e3' ,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      const fetchData=async()=>{
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data)
        setLoading(false);

        } catch (error) {
            setError(error);
            alert('There is an error')
      
        }finally{
        setLoading(false);


        }
      }
      useEffect(() => {
        fetchData();
      
       
      }, []);
      
const reFetch =()=>{
    setLoading(true);
    fetchData();
}
return {data,loading,error,reFetch};



}

export default useFetch;