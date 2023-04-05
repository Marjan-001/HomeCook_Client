import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>


  </React.Fragment>

  const handlesignOut = () => {

    logOut()
      .then(result => { })
      .catch(error => console.error(error))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact font-bold text-emerald-500 dropdown-content mt-3 p-2 shadow bg-emerald-100 rounded-box w-52">
            {navItems}
          </ul>

        </div>
        <Link to='/' className="text-emerald-500  normal-case text-xl lg:text-2xl font-extrabold">HomeCook</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold  text-emerald-500 menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <h1 className='text-emerald-600 mr-4'>{user?.displayName}</h1>

        {
          user?.email ?
            <button onClick={handlesignOut} className="btn btn-primary">Log Out</button>
            :

            <Link to='login' className="btn btn-primary">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;