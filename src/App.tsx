import { Stage, Layer } from 'react-konva';
import { styled } from "styled-components";
import PT, { Point, PTE } from "@/components/PT";
import { NextRefLine, SelfRefLine } from "@/components/Lines";

const C = styled.div`
  position: relative;
`;

type PT = {
  pos: Point;
  pn: number;
  ptes: PTE[];
}

const tables: PT[] = [
  { tn: 1, pos: { x: 40, y: 40 },   ptes: [{ pn: 1, x: true }, { pn: 2, r: true }, { pn: 5, r: true }] },
  { tn: 2, pos: { x: 480, y: 170 }, ptes: [{ pn: 2, x: true }, { pn: 3, r: true }, { pn: 4, r: true }] },
  { tn: 3, pos: { x: 840, y: 100 }, ptes: [{ pn: 3, x: true }, { pn: 0, w: true }] },
  { tn: 4, pos: { x: 840, y: 300 }, ptes: [{ pn: 4, x: true }, { pn: 0, r: true }, { pn: 0, r: true, w: true }] },
  { tn: 5, pos: { x: 440, y: 320 }, ptes: [{ pn: 5, x: true }, { pn: 4, r: true }, { pn: 0, r: true }, { pn: 0, r: true }] },
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
