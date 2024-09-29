import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export const Signupform = ({setislogedin}) => {

  const Navigate=useNavigate();
  const [showpassword,setshowpassword]=useState(false);
const [formdata,setformdata]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:""
})

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
       if(formdata===' '){
        toast.error("form cannot be blank");
       }

      if(formdata.password!== formdata.conformpassword){
       
        toast.error("passwords do not match");
      }
      else{
           // setislogedin(true);
      toast.success("account created");
    
    // to print the data at console
    const accountData ={
      ...formdata
    };
    console.log("printing account data");
    console.log(accountData);
    
    Navigate("/login");
      }
}

  return (
    <div className=''>
      {/* student instructor tab */}
    {/* <div >
      <button className='text-white'>
        student-
      </button>
      <button className='text-white'>
        instructor
      </button>
    </div> */}
    <form  >
      {/* first name and last name */}
      <div className='flex flex-wrap gap-2 '>
         <label>
        <p className='text-white '>first name<sup className='text-red-600'>*</sup></p>
        <input    className='p-1 rounded-sm bg-slate-800'
        type='text'
        name="firstname"
        onChange={changehandler}
        placeholder='enter first name'
        value={formdata.firstname}
        ></input>
      </label>

      <label>
        <p className='text-white'>last name<sup className='text-red-600'>*</sup></p>
        <input     className='p-1 rounded-sm bg-slate-800'
        type='text'
        name="lastname"
        onChange={changehandler}
        placeholder='enter last name'
        value={formdata.lastname}
        ></input>
      </label>
      </div>
      {/* email add */}
      <label>
        <p className='text-white'>email address<sup className='text-red-600'>*</sup></p>
        <input     className='p-1 rounded-sm bg-slate-800 w-60'
        type='email'
        name="email"
        onChange={changehandler}
        placeholder='enter email address'
        value={formdata.email}
        ></input>
      </label>
   {/* create password and conform password */}
 <div className='flex flex-wrap gap-2'>
   <label>
        <p className='text-white'>create password<sup className='text-red-600'>*</sup></p>
        <input     className='p-1 rounded-sm bg-slate-800'
        type={showpassword ?("text"):("assword")}
        name="password"
        onChange={changehandler}
        placeholder='create your password'
        value={formdata.password}
        ></input>
        <span onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible />)}
            </span>

      </label>

      <label>
        <p className='text-white'>conform password<sup className='text-red-600'>*</sup></p>
        <input      className='p-1 rounded-sm bg-slate-800'
        type={showpassword ?("text"):("assword")}
        name="conformpassword"
        onChange={changehandler}
        placeholder='create conform password'
        value={formdata.conformpassword}
        ></input>
        <span onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible />)}
            </span>

      </label>
      </div>

    </form>
<button className='bg-yellow-300 py-1 px-6 rounded-sm w-60' onClick={submithandler}>create account</button>

    </div>
  )
}
export default Signupform;