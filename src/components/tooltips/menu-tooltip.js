import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menu-data"
import MenuButton from "../buttons/menu-button"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);

  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  /*display: ${props => (props.isOpen ? "block" : "none")};*/
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
`
