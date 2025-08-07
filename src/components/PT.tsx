import { Component } from "react";
import { styled } from "styled-components";
import { WIDTH, LINE_HEIGHT } from "@/components/consts";

export type PTE = {
  pn: number;
  r: boolean;
  x: boolean;
};

export type Point = {
  x: number;
  y: number;
};

const TR = styled.tr`
  width: ${WIDTH}px;
  height: ${LINE_HEIGHT}px;
  margin: 0px;
  border: 1px solid #0f0;
  border-bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
`;

const TD = styled.td`
  height: 100%;
  margin: 0px;
  padding: 2px;
  font-size: 10px;
  display: flex;
  align-items: center;
`;

const Table = styled.table<{ position: Point }>`
  position: absolute;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  border-bottom: 1px solid #0f0;
  border-spacing: 0;
`;

const BoolBox = styled.div<{ on: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  border: 1px solid #fff;
  ${({ on }) => on ? `background: #fff;` : ""}
`;

const TB = styled.tbody`
  border-spacing: 0;
`;

const PT: Component<{ entries: PTE[], position: Point }> = ({ entries, position }) => (
  <Table position={position}>
    <TB>
      {entries.map((e, i) => (
        <TR key={i}>
          <TD>{e.pn}</TD>
          <TD>
            <BoolBox on={e.r}>R</BoolBox>
            <BoolBox on={e.x}>X</BoolBox>
          </TD>
        </TR>
      ))}
  </TB>
  </Table>
);

export default PT;
