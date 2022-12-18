import { Trash } from "phosphor-react";

export function Task() {
  return (
    <div className="flex items-start justify-between gap-4 p-4 bg-gray-500 border-[1px] border-gray-400 rounded-lg shadow-lg">
      <p className="text-gray-100 text-sm">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className="p-1 rounded-lg group hover:bg-gray-400 hover:shadow-lg transition duration-150">
        <Trash
          size={18}
          className="text-gray-300 group-hover:text-red-500 transition duration-150"
        />
      </button>
    </div>
  );
}
