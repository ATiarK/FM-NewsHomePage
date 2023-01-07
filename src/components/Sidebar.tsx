import { MenuList } from "../container/Header";

export default function Sidebar() {
  return (
    <div role="sidebar" className="text-end mt-2 md:hidden flex">
      <div className="bg-white w-full flex flex-col right-0">
        {MenuList.map((x, i) => (
          <div key={i} className="my-auto p-3">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
