import React from 'react'
import Template from './Template';
import imagepan from '../photo/pankaj.JPG';
export const Login = (setislogedin) => {
 
  return (
    <Template
  
    title="welcome back"
    desc1="build skills for today ,tommorrow,and beyond"
    desc2="educate to future-proof your carrer"
    image={imagepan}
    formtype="login"

    setislogedin={setislogedin}
    
    />
  )
}
export default Login;