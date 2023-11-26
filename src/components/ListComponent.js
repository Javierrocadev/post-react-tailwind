import React, { Component } from "react";
const products = [
  {
    id: 1,
    name: "Product 1",
    color: "Red",
    price: "$19.99",
    imageSrc:
      "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Product 1 Image",
    href: "/product1",
  },
  {
    id: 2,
    name: "Product 2",
    color: "Blue",
    price: "$29.99",
    imageSrc:
      "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Product 2 Image",
    href: "/product2",
  },
  {
    id: 3,
    name: "Product 3",
    color: "Green",
    price: "$11.99",
    imageSrc:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Product 2 Image",
    href: "/product2",
  },
  {
    id: 4,
    name: "Product 88",
    color: "Blue",
    price: "$64.99",
    imageSrc:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Product 2 Image",
    href: "/product2",
  },
  {
    id: 5,
    name: "Product 12",
    color: "Blue",
    price: "$29.99",
    imageSrc:
      "https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    imageAlt: "Product 2 Image",
    href: "/product2",
  },
  {
    id: 6,
    name: "Product 57",
    color: "Red",
    price: "$19.99",
    imageSrc:
      "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Product 1 Image",
    href: "/product1",
  },
  {
    id: 7,
    name: "Product 54",
    color: "Red",
    price: "$2.99",
    imageSrc:
      "https://images.pexels.com/photos/1884579/pexels-photo-1884579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Product 1 Image",
    href: "/product1",
  },
  {
    id: 8,
    name: "Product 23",
    color: "Red",
    price: "$12.99",
    imageSrc:
      "https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Product 1 Image",
    href: "/product1",
  },
  // Add more products as needed
];
const textos = [
  {
    titulo: "Lorem ipsum",
    parrafo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis eros varius sem ornare, ut porttitor ex porta. Nam luctus massa magna, et gravida mi semper et.",
    enlace: "https://www.ejemplo1.com",
  },
  {
    titulo: "Suspendisse at",
    parrafo:
      "Suspendisse at turpis eget quam convallis ornare sit amet quis urna. Donec ac sapien orci. Proin tincidunt augue fermentum magna ullamcorper blandit.",
    enlace: "https://www.ejemplo2.com",
  },
  {
    titulo: "Etiam ",
    parrafo:
      "Etiam vulputate lorem nisl, non mattis ante tempor non. Cras quis tellus quis ex scelerisque rhoncus. Nam consequat, nulla at ultricies auctor, mauris quam tempor metus.",
    enlace: "https://www.ejemplo3.com",
  },
  {
    titulo: "Mauris",
    parrafo:
      "Mauris ut nibh nec arcu sagittis pulvinar. Duis dignissim sem sit amet ultricies gravida. Morbi sed sagittis arcu, id facilisis massa. Maecenas ultrices pulvinar nibh.",
    enlace: "https://www.ejemplo12.com",
  },
  {
    titulo: "Enon mattis",
    parrafo:
      "Enon mattis ante tempor non. Cras quis tellus quis ex scelerisque rhoncus. Nam consequat, nulla at ultricies auctor, mauris quam tempor metus.",
    enlace: "https://www.ejemplo237.com",
  },
  {
    titulo: "Cras quis",
    parrafo:
      "Cras quis tellus quis ex scelerisque rhoncus. Nam consequat, nulla at ultricies auctor, mauris quam tempor metus.",
    enlace: "https://www.ejemplodfd.com",
  },
];
export default class ListComponent extends Component {
  render() {
    return (
      <>
        <div className="bg-neutral-50 ">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <h2 className="text-2xl my-8 font-bold tracking-tight text-gray-900">
              Destacado de hoy
            </h2>
            <div className="flex flex-wrap gap-2">
              {textos.map((textos) => (
                <div class="w-96 h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                  <div class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                  <div class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                  <div class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                  <div class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                  <div class="z-10 flex flex-col justify-evenly w-full h-full">
                    <span class="text-2xl font-bold">{textos.titulo}</span>
                    <p className=" line-clamp-3">{textos.parrafo}</p>
                    <a
                      href={textos.enlace}
                      class="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3"
                    >
                      See more
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl my-6 font-bold tracking-tight text-gray-900">
              Nuestra selección
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative border border-neutral-50 shadow-lg p-2 rounded"
                >
                  <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-44 w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-sky-800 font-bold">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute  inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            {/* <div className="flex flex-wrap gap-2">
              {textos.map((textos) => (
                <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
                  <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
                  <div class="">
                    <p class="font-extrabold">{textos.titulo}</p>
                    <p class="line-clamp-3">{textos.parrafo}</p>
                  </div>
                  <a
                    href={textos.enlace}
                    class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors"
                  >
                    See more
                  </a>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
