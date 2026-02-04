import React from "react";
import {assets} from "../assets/assets.js"
import { useNavigate } from "react-router-dom";


const EmailVerify = () =>{

    const navigate = useNavigate()
  
  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
    <img onClick={() => navigate('/')} src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' />
    <form className ="">

    </form>
    </div>
  )
}

export default EmailVerify;