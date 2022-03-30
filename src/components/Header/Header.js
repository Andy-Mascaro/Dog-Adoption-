import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async ()=>{
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="header">
      <NavLink id="link" exact to ='/'>Home</NavLink>
      
      {!currentUser && (<NavLink to='/auth'>Sign In</NavLink>)}

      {currentUser && (
        <NavLink id="link" exact to ='/dogs/'>Admin</NavLink>
      )}
      {currentUser && (
        <ul>
          <p>{currentUser}</p>
          <p className='link' onClick={handleLogout}>Logout</p>
        </ul>
      )}

    </div>
    
  );
}
