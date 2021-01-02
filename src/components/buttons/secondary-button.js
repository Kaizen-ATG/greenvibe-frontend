import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption, Caption2 } from "../styles/TextStyles"

export default function SecondaryButton(props) {
  return (
    <Link to="/dashboard">
      <Wrapper>
        <Title>{props.title || "Secondary Btn"}</Title>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  height: 48px;
  vertical-align: middle;
  padding: 15px 20px;
  text-align: center;
  min-width: 80px;
  max-width: 140px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 24px;
  border: 2px solid #000;
`

const Title = styled(Caption2)`
  color: black;
`
