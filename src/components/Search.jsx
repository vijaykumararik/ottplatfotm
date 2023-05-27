import React from 'react'
import { useParams } from 'react-router-dom'
import Movieslist from './Movieslist'
import { useState,useEffect } from 'react'

function Search() {
    let {searchkey} =useParams()
    let [movies,setMovies]= useState(null)
   let [error,setError]=useState(null);
   let [pending,setPending]=useState(true)
   
   useEffect(()=>{
    setMovies(null);
    setPending(true)
   setTimeout(() => {
    fetch("http://localhost:5/movies")
    .then((res)=>{ return res.json() })
    .then((data)=>{
      let d=data.filter((m)=>{return (m.moviename.toLowerCase().startsWith(searchkey.toLowerCase()))||
                                     (m.genre.toLowerCase()===searchkey.toLowerCase())||
                                     (m.languages.includes(searchkey))
      })
      
      setMovies(d); console.log(data); setPending(false)})
    .catch((err)=>{console.log(err);setError(err);setPending(false)})
   }, 2000);
   },[searchkey])

  return (
    <div>
      <div className="search-container">
        {pending==true&&  <h1>loading</h1> }
        {error!=null&& <h1>404 network issue not able find page</h1> }
        {movies&&<Movieslist movies={movies} titale={"search results"}/>}

      </div>
      



    </div>
  )
}

export default Search