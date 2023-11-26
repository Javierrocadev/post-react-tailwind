import React, { Component } from "react";
import axios from "axios";
export default class ListComponent extends Component {
  state = {
    personajes: [],
  };

  loadPersonajes = () => {
    let url = "https://thronesapi.com/";
    let request = "api/v2/Characters";
    axios.get(url + request).then((response) => {
      this.setState({
        personajes: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadPersonajes();
    setInterval(() => this.loadPersonajes(), 2500);
  };
  render() {
    return (
      <>
        <div className="bg-neutral-50 ">
          <div className="mx-auto max-w-[1050px] ">
            <h2 className="text-2xl font-bold my-6 text-gray-900">
              personajes Juego de Tronos
            </h2>
            <div className=" flex flex-row flex-wrap gap-2 justify-center">
              {this.state.personajes.map((personaje, index) => {
                return (
                  <article
                    key={index}
                    className="group hover:bg-gray-700 duration-500 overflow-hidden w-64  p-2 cursor-pointer  bg-gray-800 rounded-lg shadow-lg"
                  >
                    <div className="overflow-hidden rounded relative mb-4">
                      <img
                        src={personaje.imageUrl}
                        alt="imagenpersonaje"
                        className="w-full duration-500 h-48 object-cover group-hover:scale-125"
                      />
                      <h3 className="absolute bottom-1 right-1 bg-blue-400 text-gray-50 p-1 rounded text-sm">{personaje.family}</h3>
                    </div>
                    <h1 className="text-xl text-white font-semibold">{personaje.fullName}</h1>
                    <h2 className="text-gray-300 text-md">{personaje.title}</h2>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

/* <>
<div className="bg-neutral-50 ">
  <div className="mx-auto max-w-[1050px] ">
    <h2 className="text-2xl font-bold my-6 text-gray-900">
      personajes Juego de Tronos
    </h2>
    <div className=" flex flex-row flex-wrap gap-2 justify-center">
      {this.state.personajes.map((personaje, index) => {
        return (
          <article
            key={index}
            className="group  hover:bg-gray-700 duration-500 overflow-hidden w-64  p-2 cursor-pointer  bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="overflow-hidden rounded relative mb-4">
              <img
                src={personaje.imageUrl}
                alt="imagenpersonaje"
                className="w-full duration-500 h-48 object-cover  group-hover:scale-125 "
              />
              <h3 className="absolute bottom-1 right-1 bg-blue-400 text-gray-50 p-1 rounded text-sm text-right">
                {personaje.family}
              </h3>
            </div>
            <h1 className="text-xl text-white font-semibold">
              {personaje.fullName}
            </h1>
            <h2 className="text-gray-300 text-md">{personaje.title}</h2>
          </article>
        );
      })}
    </div>
  </div>
</div>
</> */
