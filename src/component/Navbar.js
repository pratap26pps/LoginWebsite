import React from 'react'
import logo from '../photo/logo192.png'
import {Link } from 'react-router-dom'
import {toast} from 'react-toastify';
export const Navbar = (props) => {

    let islogedin=props.islogedin;
    let setislogedin=props.setislogedin;
  return (
    <div className='flex justify-between  items-center w-11/12 max-w[1160px] py-4 mx-auto'>

    <Link to="/" className='h-8 w-11'>
    <img src={logo} alt='logo'></img>
    </Link>
   

      <nav className='flex gap-3'>
        <ul className='flex gap-3 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li className='scale-0 lg:scale-95'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
        <div className='flex gap-3 text-white'> 
    {    !islogedin &&
            <Link to="/login">
           <button className='bg-neutral-700 p-1 w-16 rounded-xl border border-red-500'>login</button>
            </Link>
     } {     !islogedin &&
            <Link to="/signup">
          <button className='bg-neutral-700 p-1 w-20 rounded-xl border border-red-500'>   sign Up </button>
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
          <button>  Dashboard </button>
            </Link>
    }
    </div>
      

     
    </div>
  )
}
export default Navbar;