import Logo from '../assets/images/logo.svg';
import MenuOpen from '../assets/images/icon-menu.svg';

export const MenuList = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export default function Header() {
  return (
    <div className="flex justify-between p-2 h-16">
      <img src={Logo} alt="logo" className="p-1" />
      <div className="md:flex hidden">
        {MenuList.map((x, i) => (
          <div key={i} className="my-auto p-3">
            {x}
          </div>
        ))}
      </div>
      <button className="md:hidden block my-auto p-0">
        <img src={MenuOpen} alt="menu" className="" />
      </button>
    </div>
  );
}
