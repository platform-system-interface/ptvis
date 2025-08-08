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
  { pn: 1, pos: { x: 40, y: 40 },   ptes: [{ pn: 1, x: true }, { pn: 2, r: true }] },
  { pn: 2, pos: { x: 440, y: 170 }, ptes: [{ pn: 2, x: true }, { pn: 3, r: true }, { pn: 4, r: true }] },
  { pn: 3, pos: { x: 840, y: 100 }, ptes: [{ pn: 3, x: true }, { pn: 0, r: true }] },
  { pn: 4, pos: { x: 840, y: 300 }, ptes: [{ pn: 4, x: true }, { pn: 0, r: true }] },
];

const selfRefs = tables.map(
  ({ pn, pos, ptes }) => ptes.map((pte, i) => ({ ...pte, i })).filter(
    (pte) => pte.pn === pn
  ).map(({ i }) => ({ pos, i }))
).flat();

const nextRefs = tables.map(
  ({ pn, pos, ptes }) => ptes.map((pte, i) => ({ ...pte, i })).filter(
    (pte) => pte.pn !== pn && pte.pn !== 0
  ).map((pte) => {
    const selfPos = pos;
    const nextPos = tables.find((t) => t.pn === pte.pn).pos;
    return { selfPos, nextPos, i: pte.i };
  })
).flat();

const App = () => (
  <C>
    {tables.map((p) => <PT key={p.pn} position={p.pos} entries={p.ptes} />)}
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {selfRefs.map(({ pos, i }, k) => <SelfRefLine key={k} selfPos={pos} i={i} />)}
        {nextRefs.map((r, k) => <NextRefLine key={k} {...r} />)}
      </Layer>
    </Stage>
  </C>
);

export default App;
