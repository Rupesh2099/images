import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Headers from './components/Header';
import Search from './components/Search';
import {useState} from 'react';


const App =()=> {
  const [word,setWord]=useState(''); 
  const handleSearchSubmit=(e)=>{


    e.preventDefault();
   
    //cosole.log(e.target[0].value);
    console.log(word);
  
  };
  //console.log(word);
  return (
    <div className="App">
    
     
     <Headers title=" Images Gallery"></Headers>
     <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord}/>
    </div>
  )
}

export default App;
