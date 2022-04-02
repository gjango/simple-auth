import React, { useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../../contexts/AuthContext'

const Home = () => {
  const { deauthenticate } = useContext(AuthContext)

  return (
    <Container>
      <div>Hi Marcus, I'm really excited about maildroppa!</div>
      <LogoutButton onClick={deauthenticate}>Log out</LogoutButton>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LogoutButton = styled.div`
  width: 150px;
  height: 44px;
  border-radius: 100px;
  border: solid 1px #0f6696;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`

export default Home
