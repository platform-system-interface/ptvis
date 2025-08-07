import { Stage, Layer, Circle, Line } from 'react-konva';
import { styled } from "styled-components";
import PT, { PTE } from "@/components/PT";

const WIDTH = 200;
const LINE_HEIGHT = 20;

const getSelfRefPoints = (selfPos, i) => [
  [selfPos.x + WIDTH, selfPos.y + LINE_HEIGHT/2 + i * LINE_HEIGHT],
  [selfPos.x + WIDTH + LINE_HEIGHT/2, selfPos.y + LINE_HEIGHT/2 + i * LINE_HEIGHT],
  [selfPos.x + WIDTH + LINE_HEIGHT/2, selfPos.y - LINE_HEIGHT/2],
  [selfPos.x - LINE_HEIGHT/2, selfPos.y - LINE_HEIGHT/2],
  [selfPos.x - LINE_HEIGHT/2, selfPos.y + LINE_HEIGHT/2],
  [selfPos.x, selfPos.y + LINE_HEIGHT/2],
].flat();

const SelfRefLine = ({ selfPos, i }) => (
  <Line {...{
    points: getSelfRefPoints(selfPos, i),
    stroke: 'green',
    strokeWidth: 2,
    lineJoin: 'round',
    dash: [8, 2]
  }} />
);

const getNextRefPoints = (selfPos, nextPos, i) => [
  [selfPos.x + WIDTH, selfPos.y + LINE_HEIGHT/2 + i * LINE_HEIGHT],
  [selfPos.x + (nextPos.x-selfPos.x+WIDTH)/2, selfPos.y + LINE_HEIGHT/2 + i * LINE_HEIGHT],
  [selfPos.x + (nextPos.x-selfPos.x+WIDTH)/2, nextPos.y + LINE_HEIGHT/2],
  [selfPos.x + (nextPos.x-selfPos.x), nextPos.y + LINE_HEIGHT/2],
].flat();

const NextRefLine = ({ selfPos, nextPos, i }) => (
  <Line {...{
    points: getNextRefPoints(selfPos, nextPos, i),
    stroke: 'blue',
    strokeWidth: 2,
    lineJoin: 'round',
    dash: [8, 2]
  }} />
);

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

const Canvas = () => (
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

export default Canvas;
