import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-1913689_640.png';

export default class Navegacion extends Component {
  render() {
    return (
      <nav className="bg-neutral-50 border-b-2  text-neutral-900 text-base shadow-xl p-4">
        <div className="container mx-auto flex items-center justify-evenly">
          <a href="/">
            <img src={logo} alt="Logo" className="inline-block align-text-top w-16" />
          </a>
          <button
            className="lg:hidden text-white focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white">&#9776;</span>
          </button>
          <div className="hidden lg:flex flex-grow" id="navbarNav">
            <ul className="flex flex-grow justify-end space-x-4">
              <li className="">
                <NavLink className="" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" activeClassName="active" to="/nuevopersonaje">
                  Nuevo personaje
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" activeClassName="active" to="/modificarpersonaje">
                  Modificar personaje
                </NavLink>
              </li>
              {/* Additional items go here */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

