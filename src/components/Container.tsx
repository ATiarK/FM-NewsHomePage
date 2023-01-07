import { colorDkGray, colorLiGray } from "../config/color";
import { ICube } from "../interfaces";

export function Cube(props: ICube) {
  const { Image, Num, Title, Content } = props;
  return (
    <div className="grid grid-cols-3 gap-6">
      <img src={Image} alt="mini-img" className="h-auto w-max" />
      <div className="grid grid-cols-1 col-span-2">
        <h2 className="text-4xl font-bold" style={colorLiGray}>
          {Num}
        </h2>
        <h6 className="text-xl font-extrabold">{Title}</h6>
        <p className="text-lg font-medium" style={colorDkGray}>
          {Content}
        </p>
      </div>
    </div>
  );
}
