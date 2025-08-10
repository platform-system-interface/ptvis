import { Stage, Layer } from 'react-konva';
import { styled } from "styled-components";
import PT, { Point, PTE } from "@/components/PT";
import { NextRefLine, SelfRefLine } from "@/components/Lines";
import { WIDTH } from "@/components/consts";

const C = styled.div`
  position: relative;
`;

type PT = {
  pos: Point;
  pn: number;
  ptes: PTE[];
}

const OFFSET = 30;
const GAP = 80;

const tables: PT[] = [
  {
    tn: 1, pos: { x: OFFSET + 0 * (WIDTH + GAP), y: 40 },
    ptes: [{ pn: 1, v: true }, { pn: 2, v: true }, { pn: 5, v: true }, { pn: 4, v: true }],
  },
  {
    tn: 2, pos: { x: OFFSET + 1 * (WIDTH + GAP), y: 170 },
    ptes: [{ pn: 2, v: true }, { pn: 3, v: true }, { pn: 4, v: true }],
  },
  {
    tn: 3, pos: { x: OFFSET + 2 * (WIDTH + GAP), y: 100 },
    ptes: [{ pn: 3, v: true }, { pn: 0, w: true }],
  },
  {
    tn: 4, pos: { x: OFFSET + 2 * (WIDTH + GAP), y: 300 },
    ptes: [{ pn: 4, v: true }, { pn: 0, r: true }, { pn: 0, r: true, w: true }],
  },
  {
    tn: 5, pos: { x: OFFSET + 1 * (WIDTH + GAP), y: 360 },
    ptes: [{ pn: 5, v: true }, { pn: 4, v: true }, { pn: 0, v: true }, { pn: 0, x: true }],
  },
];

const selfRefs = tables.map(
  ({ tn, pos, ptes }) => ptes.map((pte, i) => ({ ...pte, i })).filter(
    ({ pn }) => tn === pn
  ).map(({ i }) => ({ pos, i }))
).flat();

const nextRefs = tables.map(
  ({ tn, pos, ptes }) => ptes.map((pte, i) => ({ ...pte, i })).filter(
    ({ pn }) => tn !== pn && pn !== 0
  ).map(({ pn, i }) => {
    const selfPos = pos;
    const nextPos = tables.find(({ tn }) => tn === pn).pos;
    return { selfPos, nextPos, i };
  })
).flat();

const App = () => (
  <C>
    {tables.map((p) => <PT key={p.tn} tn={p.tn} entries={p.ptes} position={p.pos} />)}
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {selfRefs.map(({ pos, i }, k) => <SelfRefLine key={k} selfPos={pos} i={i} />)}
        {nextRefs.map((r, k) => <NextRefLine key={k} {...r} />)}
      </Layer>
    </Stage>
  </C>
);

export default App;
