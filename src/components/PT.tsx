import { Component } from "react";
import { styled } from "styled-components";

export type PTE = {
  val: number;
};

export type Point = {
  x: number;
  y: number;
};

const TR = styled.tr`
  margin: 0px;
`;

const TD = styled.td`
  height: 20px;
  margin: 0px;
  padding: 3px;
  border: 1px solid #0f0;
  border-bottom: 0;
  width: 200px;
  font-size: 10px;
`;

const Table = styled.table<{ position: Point }>`
  position: absolute;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  border-bottom: 1px solid #0f0;
  border-spacing: 0;
`;

const TB = styled.tbody`
  border-spacing: 0;
`;

const PT: Component<{ entries: PTE[], position: Point }> = ({ entries, position }) => (
  <Table position={position}>
    <TB>
      {entries.map((e, i) => (
        <TR key={i}>
          <TD>{e.val}</TD>
        </TR>
      ))}
  </TB>
  </Table>
);

export default PT;
