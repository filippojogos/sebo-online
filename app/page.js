"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import { Search, User } from "lucide-react";

const products = [
  { id: 1, name: "Livro Antigo - Dom Casmurro", price: "R$ 25,00", image: "https://via.placeholder.com/150" },
  { id: 2, name: "HQ Batman Ano Um", price: "R$ 40,00", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Console Retro Gameboy", price: "R$ 120,00", image: "https://via.placeholder.com/150" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sebo Online</h1>
        <div className="flex items-center mb-4 gap-2">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
          <button className="bg-gray-300 p-2 rounded-md">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-2 rounded-md shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md">Comprar via Pix</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
