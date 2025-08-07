import { Stage, Layer } from 'react-konva';
import { styled } from "styled-components";
import PT, { PTE } from "@/components/PT";
import { NextRefLine, SelfRefLine } from "@/components/Lines";

const entries: PTE[] = [
  { val: "todo..." },
  { val: "todo..." },
  { val: "todo..." },
  { val: "todo..." },
  { val: "todo..." },
];

const C = styled.div`
  position: relative;
`;

const points = [
  { x: 40, y: 40 },
  { x: 440, y: 170 },
  { x: 840, y: 100 },
  { x: 840, y: 300 },
];

const App = () => (
  <C>
    <PT position={points[0]} entries={entries} />
    <PT position={points[1]} entries={entries} />
    <PT position={points[2]} entries={entries} />
    <PT position={points[3]} entries={entries} />
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <SelfRefLine selfPos={points[0]} i={0} />
        <SelfRefLine selfPos={points[1]} i={0} />
        <SelfRefLine selfPos={points[2]} i={0} />
        <SelfRefLine selfPos={points[3]} i={0} />
        <NextRefLine selfPos={points[0]} nextPos={points[1]} i={4} />
        <NextRefLine selfPos={points[0]} nextPos={points[2]} i={2} />
        <NextRefLine selfPos={points[1]} nextPos={points[2]} i={3} />
        <NextRefLine selfPos={points[1]} nextPos={points[3]} i={4} />
      </Layer>
    </Stage>
  </C>
);

export default App;
