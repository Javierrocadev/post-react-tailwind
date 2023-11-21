import React, { Component } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
//import components
import NavegacionComponent from './components/NavegacionComponent';
import HomeComponent from './components/HomeComponent';


export default class Router extends Component {
  render() {


    // function SeriesElement(){
    //     var {serie}=useParams()
    //     return <Series serie={serie}/>
    // }
    // function PersonajesElement(){
    //     var {serie}=useParams()
    //     return <Personajes serie={serie}/>
    // }

    return (
      <BrowserRouter>
        {/* <NavegacionComponent/> */}
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            {/* <Route path="/nuevopersonaje" element={<NuevoPersonaje/>}/>
            <Route path="/modificarpersonaje" element={<ModificarPersonaje/>}/> */}
            {/* <Route path="/serie/:serie" element={<SeriesElement/>}/>
            <Route path="/personajes/:serie/" element={<PersonajesElement/>}/> */}

          
        </Routes>
      </BrowserRouter>
    )
  }
}