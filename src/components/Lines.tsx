import { Line } from 'react-konva';
import { styled } from "styled-components";

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

export const SelfRefLine = ({ selfPos, i }) => (
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

export const NextRefLine = ({ selfPos, nextPos, i }) => (
  <Line {...{
    points: getNextRefPoints(selfPos, nextPos, i),
    stroke: 'blue',
    strokeWidth: 2,
    lineJoin: 'round',
    dash: [8, 2]
  }} />
);
