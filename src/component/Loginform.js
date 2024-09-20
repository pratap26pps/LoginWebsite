import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export const Loginform = (setislogedin) => {


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

  function submithandler(){
  // setislogedin(true)
    toast.success("logged in");
    Navigate("/dasboard");
  }


  return (
    <div>
      <form onSubmit={submithandler} className='mr-[267px] mt-14'>
        <label>
            <p>
                email address<sub>*</sub>
            </p>
            <input
            required
            type='email'
            name="email"
            value={formdata.email}
            onChange={changehandler}
            placeholder='enter email id'
            />   
        </label>

        <label>
            <p>
                password<sub>*</sub>
            </p>
            <input
            required
            type={showpassword ? ("text"):("password")}
            value={formdata.password}
            name="password"
            onChange={changehandler}
            placeholder='enter password'
            />
            <span onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible />)}
            </span>

       <Link>
       <p>forgot password</p>
       </Link>

        </label>
     <button>sign in</button>
      </form>

    </div>
  )
}
export default Loginform;