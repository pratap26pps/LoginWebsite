import React from 'react'
import logo from '../photo/logo192.png'
import {Link } from 'react-router-dom'
import {toast} from 'react-toastify';
export const Navbar = (props) => {

    let islogedin=props.islogedin;
    let setislogedin=props.setislogedin;
  return (
    <div className='flex justify-evenly'>

    <Link to="/" className='h-8 w-11'>
    <img src={logo} alt='logo'></img>
    </Link>
   

      <nav className='flex gap-3'>
        <ul className='flex gap-3'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
        <div className='flex gap-3'> 
    {    !islogedin &&
            <Link to="/login">
           <button>login</button>
            </Link>
     } {     !islogedin &&
            <Link to="/signup">
          <button>   sign Up </button>
            </Link>
}{        islogedin &&
            <Link to="/">
          <button   onClick={()=>{
            setislogedin(false);
            toast.success("logged out")
          }}
          
          >   logout </button>
            </Link>
}{        islogedin &&
            <Link to="/dasboard">
          <button>  Dasboard </button>
            </Link>
    }
    </div>
      

     
    </div>
  )
}
export default Navbar;