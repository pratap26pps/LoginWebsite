import React from 'react'
import pankaj from '../photo/pankaj.JPG'
import Signupform from './Signupform';
import Loginform from './Loginform';

import { FcGoogle } from 'react-icons/fc';
 
export const Template = ({title,desc1,desc2,image,formtype,setislogedin}) => {
  return (

     <div className= 'flex flex-col lg:flex-row  py-12 justify-evenly'>

     <div className=' ml-10'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] absolute  '>{title}</h1> 

        <p className='text-[1.125rem] leading[1.625rem] w-[54vw] mt-10 ' >
            <span className='text-blue-200'>{desc1}</span>
            <br></br>
            <span className='text-blue-600 italic'>{desc2}</span>
        </p>  
      
        {formtype ==="signup" ?(<Signupform setislogedin={setislogedin}/>):(<Loginform  setislogedin={setislogedin}/>)}
         
         <div className=' flex w-full items-center h-2 mt-1 ml-7  gap-x-2'>
           <div className='w-16 h-[1px] bg-slate-700'></div>
            <p className='font-medium text-blue-800'>or</p>
           <div  className='w-16 h-[1px] bg-slate-700'></div>
         </div>
          <button className='w-60 flex justify-center rounded-lg font-medium text-white
                  hover:bg-slate-900  border border-b-gray-800 p-2 gap-2   mt-2 '>
                <FcGoogle className='size-7'></FcGoogle>
                <p> sign in with google</p>
          </button>
     </div>

     <div  className=' flex flex-col h-12 w-44  mt-10 ml-16 lg:ml-0 lg:mr-20 scale-0 lg:scale-95'>
          <img  src={pankaj}>
          </img>
     </div>
    



     </div>

  )
}
export default Template;