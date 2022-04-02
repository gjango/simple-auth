import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AuthContext from '../../contexts/AuthContext'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {
  const { authenticate, client } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const handleLogin = () => {
    if (!form.email || !form.password) return
    authenticate()
    navigate('/')
  }
  return client.isAuthenticated ? (
    <Navigate to={'/'} />
  ) : (
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
        <LoginButton onClick={handleLogin} disabled={!form.email || !form.password}>
          Login
        </LoginButton>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://wallpapercave.com/wp/wp7911644.jpg');
  background-size: 100vw 100vh;
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
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`

export default Login
