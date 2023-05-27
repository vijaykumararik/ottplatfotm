import React, { useState } from 'react'
import { useEffect } from 'react'
import Movieslist from './Movieslist';

function Favorate() {
    let [fav,setFav]=useState([]);
    useEffect(()=>{
      setFav(JSON.parse(localStorage.getItem("fav")))
    },[fav])
  return (
    <div> 
      <Movieslist movies={fav} titale="Favorate"/>

    </div>
  )
}

export default Favorate