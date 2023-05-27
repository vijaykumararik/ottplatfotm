import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Relevant from './Relevant';

function Movieview() {
  let {id}=useParams()
  let navigate=useNavigate();
  let [movie,setMovie]=useState(null);
 
  let [ispending,setIspending]=useState(true);
  let [error,setError]=useState(null)
  useEffect(()=>{
    fetch("http://localhost:5/movies/"+id)
    .then(res=> res.json())
    .then((data)=>{setMovie(data);setIspending(false)})
    .catch((err)=>{setError(err);ispending(false)})
  },[id])
  let deleteMovie = ()=>{
    fetch("http://localhost:5/movies/"+ id , {method : "DELETE"} )
    .then(()=>{ navigate("/") })
}


 
  return (
    <div>
      {ispending==true&&<h1>loading....</h1> }
      {error!=null&&<h1>NOT geting required information</h1> }
      {movie&&<div className='movieview'>
      <h1>Watch Complete movie</h1>
                        <img src={movie.poster} alt="poster" />
                        <h1>Movie : {movie.moviename}</h1>
                        <h3>Actor : {movie.hero}</h3>
                        <p>Director : {movie.ditrector}</p> 
                        <p>Languages : {movie.languages.join(" , ")}</p>
                        <p>Genre : {movie.genre}</p>
                        <h3>Story Line : </h3>
                        <p>{movie.synopsis}</p>
                        <iframe width="560" height="315" src={movie.trailer} 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                       <button onClick={deleteMovie}>delete</button>
                       <button onClick={()=>{navigate(`/updatemovie/${id}`)}} >Update movie</button>


      </div>}
      
      {movie && <Relevant genre={movie.genre}/>}

    </div>
  )
}

export default Movieview;
