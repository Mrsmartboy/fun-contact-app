import styled from "styled-components";

export const TableCellContainer = styled.li`
    display: flex;
    border-top: none;
    border: 1px solid #cbd5e1;
    list-style-type: none;
`

export const SeparatorLine= styled.hr`
   border: 1px solid #cbd5e1;
   margin: 0px;
`

export const NameCell = styled.p`
  margin-left: 32px;
  color: #334155;
  font-size: 20px;
  font-weight: 500;
  width: 33%;
`

export const MobileCell = styled.p`
  margin-left: 32px;
  color: #334155;
  font-size: 20px;
  font-weight: 500;
  
`

export const MobileContainer= styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-grow:1;
`

export const Star = styled.img`
  height: 32px;
  width: 32px;
  background-color: transparent;
  margin-right: 24px;

`

export const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`