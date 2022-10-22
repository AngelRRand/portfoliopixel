import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container';
const LandingPage = () => {
  return (
    <Container styles='home_landingPage'>
      <Link to={'/home'}>LandingPage</Link>
    </Container>
  )
}

export default LandingPage