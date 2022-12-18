import { PlusCircle } from "phosphor-react";
import logoImage from "./assets/logo.svg";
import { Task } from "./components/Task";

import "./styles/main.css";

export function App() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <header className="bg-gray-700 pt-16">
        <div className="max-w-3xl px-4 mx-auto">
          <img src={logoImage} alt="" className="mx-auto" />

          <form action="" className="flex gap-4 relative -bottom-7">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="w-full rounded-lg p-4 bg-gray-500 border-[1px] border-gray-700 placeholder:text-gray-300 text-gray-100 outline-none shadow-lg"
            />

            <button
              type="submit"
              className="text-gray-100 flex items-center gap-2 font-bold p-4 rounded-lg bg-blue-700 hover:bg-blue-300 transition duration-150 shadow-lg"
            >
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
        </div>
      </header>

      <main className="py-24">
        <div className="max-w-3xl px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h6 className="text-blue-300 font-bold text-sm">
              Tarefas criadas
              <span className="bg-gray-500 text-gray-100 px-2 py-[2px] rounded-full ml-2">
                5
              </span>
            </h6>

            <h6 className="text-purple-500 font-bold text-sm">
              Concluídas
              <span className="bg-gray-500 text-gray-100 px-2 py-[2px] rounded-full ml-2">
                2 de 5
              </span>
            </h6>
          </div>

          <div className="flex flex-col gap-3">
            <Task />
            <Task />
          </div>
        </div>
      </main>
    </div>
  );
}
