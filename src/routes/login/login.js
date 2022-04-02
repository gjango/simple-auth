import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  return (
    <Container>
      <Wrapper>
        <TextInput
          placeholder='Enter whatever email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextInput
          placeholder='Enter whatever password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <LoginButton>Login</LoginButton>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://wallpapercave.com/wp/wp7911644.jpg');
  background-size: cover;
`

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`

const TextInput = styled.input`
  width: 250px;
  height: 44px;
  border-radius: 100px;
  border: solid 1px #0f6696;
  outline: none;
  padding-left: 20px;
  padding-right: 30px;
  color: #014165;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: normal;
  &::placeholder {
    opacity: 0.45;
    color: #014165;
  }
  margin-bottom: 30px;
`

const LoginButton = styled.div`
  width: 150px;
  height: 44px;
  border-radius: 100px;
  border: solid 1px #0f6696;
  background-color: pink;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`

export default Login
