import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () =>{
  return (

    <div className ="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r">
        <Navbar/>
        <Header/>
        
    </div>
  )
}

export default Home;