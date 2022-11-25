import Logo from '../assets/images/logo.svg';

const MenuList = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export default function Header() {
  return (
    <div className="flex justify-between p-2 h-20">
      <img src={Logo} alt="logo" className="p-1" />
      <div className="flex">
        {MenuList.map((x, i) => (
          <div key={i} className="my-auto p-3">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
