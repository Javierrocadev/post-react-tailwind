import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navegacion extends Component {
  render() {
    return (
      <nav className="bg-neutral-50 border-b-2  text-neutral-900 text-base shadow-xl p-4">
        <div className="container mx-auto flex items-center justify-center">
            <ul className="flex flex-grow justify-center space-x-4">
              <li className="">
                <NavLink className="" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" activeClassName="active" to="/lista">
                  Lista
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" activeClassName="active" to="/api">
                  Api
                </NavLink>
              </li>
              {/* Additional items go here */}
            </ul>
        </div>
      </nav>
    );
  }
}

