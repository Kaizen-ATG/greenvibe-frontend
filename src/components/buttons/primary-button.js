import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption, Caption2 } from "../styles/TextStyles"

export default function PrimaryButton(props) {
  return (
    <Link to="/dashboard">
      <Wrapper>
        <Title>{props.title || "Primary Btn"}</Title>
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
  color: #000;
  font-weight: 500;
  border-radius: 24px;
  background: #12c35a;
`

const Title = styled(Caption2)`
  color: white;
`
