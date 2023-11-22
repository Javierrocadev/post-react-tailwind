import React, { Component } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
//import components
import ListComponent from './components/ListComponent';
import HomeComponent from './components/HomeComponent';
import ApiComponent from './components/ApiComponent';

import NavegacionComponent from './components/NavegacionComponent';



export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavegacionComponent/>
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/lista" element={<ListComponent/>}/>
            <Route path="/api" element={<ApiComponent/>}/>

        </Routes>
      </BrowserRouter>
    )
  }
}