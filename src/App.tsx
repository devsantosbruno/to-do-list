import { PlusCircle } from "phosphor-react";
import logoImage from "./assets/logo.svg";

import "./styles/main.css";

export function App() {
  return (
    <div>
      <header className="bg-gray-700 pt-16">
        <div className="max-w-3xl px-4 mx-auto">
          <img src={logoImage} alt="" className="mx-auto" />

          <form action="" className="flex gap-4 relative -bottom-7">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="w-full rounded-lg p-4 bg-gray-500 border-gray-700 placeholder:text-gray-300 text-white outline-none"
            />

            <button
              type="submit"
              className="text-white flex items-center gap-2 font-bold p-4 rounded-lg bg-blue-700 hover:bg-blue-300 transition duration-150"
            >
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
        </div>
      </header>

      <main className="bg-[#454545] py-24"></main>
    </div>
  );
}
