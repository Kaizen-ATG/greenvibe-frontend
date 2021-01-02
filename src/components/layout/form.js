import React from "react"
import styled from "styled-components"
import { H3, MediumText, BodyIntro } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
export default function Login(props) {
  return (
    <Wrapper>
      <Title>Sign in</Title>
      <FormWrapper>
        <form>
          Username: <br />
          <input className="form-control" type="text" name="username" />
          <br />
          Password:
          <br />
          <input className="form-control" type="text" name="password" />
          <br />
          <br />
          <input className="btn btn-info" type="submit" value="Submit" />
        </form>
      </FormWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  margin-top: 240px;
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    position: relative;
    margin-top: 120px;
  }
`
const Title = styled(BodyIntro)`
  color: ${themes.light.text1};
`
const FormWrapper = styled.div``
