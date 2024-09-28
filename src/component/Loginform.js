import React, { useState } from 'react'
// import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const Loginform = ({setislogedin}) => {


   const Navigate=useNavigate();

    const [formdata,setformdata]=useState({
      email:"", password:""  
    })
    const [showpassword,setshowpassword]=useState(false);
      
    function changehandler(event){
        setformdata((prevdata)=>(
            {
              ...prevdata,
              [event.target.name]:event.target.value
            }
        ))
    }

  function submithandler(event){
    event.preventDefault();
     setislogedin(true);
    toast.success("logged in");
    Navigate("/dasboard");
  }


  return (
    <div>


      
      <form onSubmit={submithandler} className='  '>
        <label>
            <p className='text-white'>
                email address<sup className='text-red-600'>*</sup>
            </p>
            <input   className='p-1 rounded-sm bg-slate-800 w-60'
            required
            type='email'
            name="email"
            value={formdata.email}
            onChange={changehandler}
            placeholder='enter email id'
            />   
        </label>

        <label>
            <p className='text-white'>
                password<sup className='text-red-600'>*</sup>
            </p>
            <input      className='p-1 rounded-sm bg-slate-800 w-60'
            required
            type={showpassword ? ("text"):("password")}
            value={formdata.password}
            name="password"
            onChange={changehandler}
            placeholder='enter password'
            />
            {/* <span className='text-yellow-400' onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible />)}
            </span> */}

       <Link>
       <p className='text-cyan-600'>forgot password</p>
       </Link>

        </label>
     <button className='bg-yellow-400 py-2 px-24 rounded-md'>sign in</button>
     

 
 </form>
    </div>
  )
}
export default Loginform;