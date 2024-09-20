import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export const Signupform = (setislogedin) => {

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

      if(formdata.password!= formdata.conformpassword){
       
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
    <div className='mr-96'>
      {/* student instructor tab */}
    <div>
      <button>
        student
      </button>
      <button>
        instructor
      </button>
    </div>
    <form >
      {/* first name and last name */}
      <div>
         <label>
        <p>first name<sup>*</sup></p>
        <input
        type='text'
        name="firstname"
        onChange={changehandler}
        placeholder='enter first name'
        value={formdata.firstname}
        ></input>
      </label>

      <label>
        <p>last name<sup>*</sup></p>
        <input
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
        <p>email address<sup>*</sup></p>
        <input
        type='email'
        name="email"
        onChange={changehandler}
        placeholder='enter email address'
        value={formdata.email}
        ></input>
      </label>
   {/* create password and conform password */}

   <label>
        <p>create password<sup>*</sup></p>
        <input
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
        <p>conform password<sup>*</sup></p>
        <input
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


    </form>
<button onClick={submithandler}>create account</button>

    </div>
  )
}
export default Signupform;