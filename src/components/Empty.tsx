import { ClipboardText } from "phosphor-react";

export function Empty() {
  return (
    <div className="text-center flex flex-col items-center justify-center rounded-xl border-t-2 border-gray-400 p-16">
      <ClipboardText size={60} className="text-gray-400" />
      <h2 className="text-gray-300 mt-4">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </h2>
    </div>
  );
}
