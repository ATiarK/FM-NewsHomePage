import { MenuList } from '../container/Header';
import MenuClose from '../assets/images/icon-menu-close.svg';

export default function Sidebar() {
  return (
    <div className="h-screen w-2/3">
      <button className="p-0">
        <img src={MenuClose} alt="close" />
      </button>

      <div className="bg-green-500 right-0">
        {MenuList.map((x, i) => (
          <div key={i} className="my-auto p-3">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
