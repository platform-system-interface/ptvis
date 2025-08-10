import { Component } from "react";
import { styled } from "styled-components";
import { WIDTH, LINE_HEIGHT } from "@/components/consts";

export type PTE = {
  pn: number;
  r?: boolean;
  w?: boolean;
  x?: boolean;
};

export type Point = {
  x: number;
  y: number;
};

const Pos = styled.div<{ position: Point }>`
  position: absolute;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  z-index: 100;
  outline-offset: 5px;
  &:hover {
    outline: 1px dotted #700;
  }
`;

const Table = styled.table`
  border-spacing: 0;
  background: #111;
`;

const BORDER = "1px solid #080";

const TB = styled.tbody`
  border-bottom: ${BORDER};
  border-spacing: 0;
  display: flex;
  flex-direction: column;
`;

const TR = styled.tr`
  width: ${WIDTH}px;
  height: ${LINE_HEIGHT}px;
  margin: 0px;
  border: ${BORDER};
  border-bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
`;

const TD = styled.td`
  height: 100%;
  margin: 0px;
  padding: 2px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const BoolBox = styled.button<{ on: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  border: 1px solid #fff;
  color: ${({ on }) => on ? "#222" : "#ddd"};
  background: ${({ on }) => on ? "#fff" : "#000"};
`;

const TN = styled.div`
  padding: 2px 4px;
  font-size: 12px;
`;

type Props = {
  tn: number;
  entries: PTE[];
  position: Point;
};

const PT: Component<Props> = ({ tn, entries, position }) => (
  <Pos position={position}>
    <Table>
      <TB>
        {entries.map((e, i) => (
          <TR key={i}>
            <TD>{e.pn}</TD>
            <TD>
              <BoolBox on={e.d}>D</BoolBox>
              <BoolBox on={e.a}>A</BoolBox>
              <BoolBox on={e.g}>G</BoolBox>
              <BoolBox on={e.u}>U</BoolBox>
              <BoolBox on={e.x}>X</BoolBox>
              <BoolBox on={e.w}>W</BoolBox>
              <BoolBox on={e.r}>R</BoolBox>
              <BoolBox on={e.v}>V</BoolBox>
            </TD>
          </TR>
        ))}
      </TB>
    </Table>
    <TN>table #{tn}</TN>
  </Pos>
);

export default PT;
