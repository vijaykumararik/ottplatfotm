import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Movieslist({movies,titale}) {

let [favid,setFavid]=useState([]);
let [alterd,setAlterd] =useState(0);
useEffect(()=>{
  let fav=JSON.parse(localStorage.getItem("fav"));
  setFavid(fav.map((v)=>{ return v.id}));
},[alterd])


  function add(movie){
    let fav=JSON.parse(localStorage.getItem("fav"));
    fav.push(movie);
    localStorage.setItem("fav",JSON.stringify(fav))
    setAlterd(alterd+1)
   
  }
  function remove(id){
    let fav=JSON.parse(localStorage.getItem("fav"));
    fav=fav.filter(m=> m.id!=id)
    localStorage.setItem("fav",JSON.stringify(fav))
    setAlterd(alterd+1)
  

  }

  return ( <>
        <h1  id="titale">{titale}</h1>
    <div className='movieslist' movieslist>
     {   movies.map((movie)=>( <div className='movie-dis' >
   {favid.includes(movie.id)? <button id="btn-remove" onClick={()=>{remove(movie.id)}}><i className='bx bxs-heart'   ></i></button>
   : <button id="btn-add" onClick={()=>{add(movie)}}><i className='bx bx-heart' ></i></button>}

      <Link to={`/movieview/${movie.id}`}>
            <p><img id="poster" src={movie.poster} style={{width:"200px",height:"200px",}} alt="" /></p>
            <h1>{movie.moviename}</h1>
            <p>{movie.genre}</p>
            </Link>
          </div>)) }

    </div>
    </>
  )
}

export default Movieslist