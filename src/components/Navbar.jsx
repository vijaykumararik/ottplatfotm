import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  let [searchword,setSearchword]=useState("");
  let [movienames,setMovienames]=useState([]);
  let [menu,setMenu]=useState(false);
   useEffect(()=>{
    
     fetch("http://localhost:5/movies")
     .then(res=>res.json())
     .then((data)=>{
      let names=data.map((m)=>{return {moviename:m.moviename,id:m.id}})
       let filterdnames=names.filter((movie)=>{
        return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
      setMovienames(filterdnames);
     })
   },[searchword])
  return (
   <>
   <div className="navbar">
    <div id="logo">
     <Link to="/"> <img src={logo} alt="" /></Link>
    </div>
    <div className='nav-left'>
    <div id="search-bar">
      <input type="text" placeholder='Serach for movie' value={searchword}
       onChange={(e)=>{setSearchword(e.target.value);console.log(e.target.value );}} />
      <Link to={`/search/${searchword}`} ><button  >Search</button></Link>
    </div>
    <div id="add-movie">
      <Link to="/fav">Favorate movie</Link>

    </div>
    <div id="add-movie">
      <Link to="/addmovie">Add movie</Link>

    </div>
    <div className="suggationbox">
      { searchword!=""&&<ul>
        {
          movienames.map((m)=>( 
            <Link to={`/movieview/${m.id}`}><li onClick={()=>{setSearchword("")}} >{m.moviename}</li></Link>
          ))
        }
        
      </ul>

      }
    </div>
    <div className="hambergermenu">
      <span onClick={()=>{setMenu(!menu)}}>
        {menu===false?<i class='bx bx-menu'></i>
         :<i class='bx bx-menu-alt-right'></i>}
                                          
     </span>
    </div>
    <div className="menu-info">
    {menu && <> 
      <div className='search-inmenu' >
      <input type="text" placeholder='Serach for movie' value={searchword}
       onChange={(e)=>{setSearchword(e.target.value);console.log(e.target.value );}} />
      <Link to={`/search/${searchword}`} ><button  >Search</button></Link>
    </div>
    
    <div >
      <Link to="/fav">Favorate movie</Link>

    </div>
    <div >
      <Link to="/addmovie">Add movie</Link>

    </div>
    
    </>}

      </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Navbar