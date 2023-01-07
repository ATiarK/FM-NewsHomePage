import { Contents } from "../assets/WrittenContent";
import { bgDark, colorLiGray, colorOrange, colorWhite } from "../config/color";

export default function Section2() {
  return (
    <section
      id="section-02"
      className="grid grid-flow-row col-span-2 lg:col-span-1 p-8"
      style={bgDark}
    >
      <h2 className="text-4xl my-auto font-bold" style={colorOrange}>
        New
      </h2>
      {Contents.map((x, i) => (
        <div key={i} className="flex py-4 flex-col gap-2">
          <hr className={`${i === 0 ? "hidden" : "block"} mb-8`} />
          <h5 className="font-bold text-base" style={colorWhite}>
            {x.title}
          </h5>
          <h6 className="text-sm tracking-wide" style={colorLiGray}>
            {x.content}
          </h6>
        </div>
      ))}
    </section>
  );
}
