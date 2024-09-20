import React from 'react'
import pankaj from '../photo/pankaj.JPG'
import Signupform from './Signupform';
import Loginform from './Loginform';
export const Template = ({title,desc1,desc2,image,formtype,setislogedin}) => {
  return (
    <div>
     <div className= 'bg-slate-700 h-[90vh] w-[210vh] mt-3 relative'>
      
       <img  src={pankaj}
           className='absolute flex h-22 w-40  ml-[650px] mt-20' ></img>
        <h1>{title}</h1> 

        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formtype ==="signup" ?(<Signupform setislogedin={setislogedin}/>):(<Loginform  setislogedin={setislogedin}/>)}
        <div>
         <div></div>
         <p>or</p>
         <div></div>
        </div>

          
           
      

        <button>sign in with google</button>
     </div>
        
        
    </div>
  )
}
export default Template;