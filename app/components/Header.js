import React from "react";
import { Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => window.location.href = "/"}>
        LojaSebo
      </div>

      {/* Barra de busca */}
      <div className="flex items-center gap-2 w-1/3">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full text-black border p-2 rounded-md"
        />
        <button className="bg-gray-300 p-2 rounded-md">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Botões de login */}
      <div className="flex items-center gap-4">
        <button className="border border-white text-white p-2 rounded-md">
          <User className="w-5 h-5 mr-2" /> Entrar
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md">
          Criar Conta
        </button>
      </div>
    </header>
  );
}
