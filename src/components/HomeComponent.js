import React, { Component } from 'react'
import background from '../assets/images/pexels-jakub-zerdzicki-18991663.jpg'
const products = [
    {
      id: 1,
      name: 'Product 1',
      color: 'Red',
      price: '$19.99',
      imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'Product 1 Image',
      href: '/product1',
    },
    {
      id: 2,
      name: 'Product 2',
      color: 'Blue',
      price: '$29.99',
      imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      imageAlt: 'Product 2 Image',
      href: '/product2',
    },
    {
        id:3,
        name: 'Product 2',
        color: 'Blue',
        price: '$29.99',
        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 4,
        name: 'Product 2',
        color: 'Blue',
        price: '$29.99',
        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 5,
        name: 'Product 2',
        color: 'Blue',
        price: '$29.99',
        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 6,
        name: 'Product 1',
        color: 'Red',
        price: '$19.99',
        imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Product 1 Image',
        href: '/product1',
      },
      {
        id: 7,
        name: 'Product 1',
        color: 'Red',
        price: '$19.99',
        imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Product 1 Image',
        href: '/product1',
      },
      {
        id: 8,
        name: 'Product 1',
        color: 'Red',
        price: '$19.99',
        imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Product 1 Image',
        href: '/product1',
      },
    // Add more products as needed
  ]
export default class Home extends Component {
  render() {
    const selectedProduct = products.filter((product) => product.id === 3)[0];
    return (
<div className="bg-neutral-50 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestra selección</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-neutral-50 shadow-lg p-2 rounded">
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
                      <span aria-hidden="true" className="absolute  inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl mt-6 mb-4 font-bold tracking-tight text-gray-900">Destacado de hoy</h2>
        {selectedProduct && (
            <div key={selectedProduct.id} className="group relative border bg-sky-100 border-neutral-50 shadow-lg p-4 rounded">
              <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="h-44 w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={selectedProduct.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {selectedProduct.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{selectedProduct.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{selectedProduct.price}</p>
              </div>
            </div>
          )}
      </div>
    </div>
    )
  }
}