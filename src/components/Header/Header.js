import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <NavLink id="link" exact to ='/'>Home</NavLink>
      <NavLink id="link" exact to ='/dogs/'>Add Dog</NavLink>

    </div>
    
  );
}
