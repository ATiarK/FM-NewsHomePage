import { SubContents } from "../assets/WrittenContent";
import { Cube } from "./Container";

export default function Section3() {
  return (
    <section
      id="section-03"
      className="grid grid-cols-1 col-span-2 md:col-span-3 md:grid-cols-3 gap-8"
    >
      {SubContents.map((x, i) => (
        <Cube
          key={i}
          Image={x.Image}
          Num={x.Num}
          Title={x.Title}
          Content={x.Content}
        />
      ))}
    </section>
  );
}
