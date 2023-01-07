import Logo from "../assets/images/logo.svg";
import MenuOpen from "../assets/images/icon-menu.svg";
import MenuClose from "../assets/images/icon-menu-close.svg";

export const MenuList = ["Home", "New", "Popular", "Trending", "Categories"];
type HeaderProp = {
  open?: boolean;
  onClick?: () => void;
};
export default function Header(props: HeaderProp) {
  const { open, onClick } = props;
  return (
    <header role="header" className="flex justify-between p-2 h-16">
      <img src={Logo} alt="logo" className="p-1" />
      <div className="md:flex hidden">
        {MenuList.map((x, i) => (
          <div key={i} className="my-auto p-3">
            {x}
          </div>
        ))}
      </div>

      <button onClick={onClick} className="md:hidden flex p-1 my-auto">
        {open ? (
          <img src={MenuClose} alt="menu" className=" object-contain h-8" />
        ) : (
          <img src={MenuOpen} alt="menu" className=" object-contain h-6" />
        )}
      </button>
    </header>
  );
}
