import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist'

function Home() {
   let [movies,setMovies]= useState(null)
   let [error,setError]=useState(null);
   let [pending,setPending]=useState(true)
   
   useEffect(()=>{
     if(localStorage.getItem("fav")==null){
      localStorage.setItem("fav","[]")
     }

   setTimeout(() => {
    fetch("http://localhost:5/movies")
    .then((res)=>{ return res.json() })
    .then((data)=>{setMovies(data); console.log(data); setPending(false)})
    .catch((err)=>{console.log(err);setError(err);setPending(false)})
   }, 2000);
   },[])
  return (
    <div>
        <div className="home">
          {error!=null&& <h1>404 network issue not able find page</h1> }
          {pending==true&&<h1>Loading.......</h1> }
        { movies&&<>
         <Movieslist movies={movies} titale="All movies"/>
         
          <Movieslist movies={movies.filter((movie)=>{ return movie.genre.includes("Comedy") })} titale="Comedy movies"/>
         
          <Movieslist movies={movies.filter((movie)=>{ return movie.genre.includes("horror")})} titale="Horrer movies"/>
          <Movieslist movies={movies.filter((movie)=>{ return movie.hero.includes("Yash")})} titale="Yash movies"/>
         </>}

        </div>
    </div>
  )
}

export default Home