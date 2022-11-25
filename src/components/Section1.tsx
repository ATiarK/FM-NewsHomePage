import BigBanner from '../assets/images/image-web-3-desktop.jpg';
import SmallBanner from '../assets/images/image-web-3-mobile.jpg';

export default function Section1() {
  return (
    <div className="grid grid-cols-2 gap-4 col-span-2">
      <img src={BigBanner} alt="logo" className="col-span-2" />
      <h1 className="text-5xl font-extrabold">The Bright Future of Web 3.0?</h1>
      <div className="flex flex-col justify-between">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="w-fit text-sm font-bold">READ MORE</button>
      </div>
    </div>
  );
}