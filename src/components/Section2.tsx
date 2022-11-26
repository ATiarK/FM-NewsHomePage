import { bgDark, colorLiGray, colorOrange, colorWhite } from '../config/color';

const Contents = [
  {
    title: 'Hydrogen VS Electric Cars',
    content: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of Al Artistry',
    content:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying up?',
    content:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export default function Section2() {
  return (
    <div
      style={bgDark}
      className="grid grid-flow-row col-span-2 lg:col-span-1 px-8">
      <h2 className="text-4xl my-auto font-bold" style={colorOrange}>
        New
      </h2>
      {Contents.map((x, i) => (
        <div key={i} className="flex flex-col gap-2">
          <h5 className="font-bold text-base" style={colorWhite}>
            {x.title}
          </h5>
          <h6 className="text-sm tracking-wide" style={colorLiGray}>
            {x.content}
          </h6>
        </div>
      ))}
    </div>
  );
}
