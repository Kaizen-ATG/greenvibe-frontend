import React from "react"
import styled from "styled-components"

const CellGroup = styled.div`
  margin: 0 20px auto;
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 24px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: 60px;
`
const CellTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  /*padding: 30px 0;*/
`
const CellContent = styled.div`
  display: grid;
  align-items: center;
`
const CellPoints = styled.div`
  padding: 12px 0;
  display: grid;
  grid-template-columns: 30px auto;
`

const GreenPoints = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #785399;
`

const CarbonPoints = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #777;
`

const Cell = props => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellContent>
      <CellTitle>{props.title}</CellTitle>
      <CellPoints>
        <GreenPoints>{props.gpoints}</GreenPoints>
        <CarbonPoints>{props.cpoints}</CarbonPoints>
      </CellPoints>
    </CellContent>
  </CellGroup>
)
export default Cell
