import React, {useState, useEffect} from 'react';
import axios from 'axios'
import instance from './axios'

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([])
    const baseURL = "https://api.themoviedb.org/3"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(baseURL + fetchUrl)
            console.log(request)
            return request
            // setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
