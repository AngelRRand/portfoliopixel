import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'


import { useState } from 'react';
import { motion } from "framer-motion";

import './About.css'
var transitions = {
  me: {
    scale: 7,
    x: 350,
    y: -1150,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  },
  dream: {
    scale: 7,
    x: -500,
    y: 1100,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  },
  art: {
    scale: 7,
    x: 750,
    y: -450,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  }
}

const About = () => {

  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState({});
  

  const animationOn = (animations : object) => {


    setAnimation(animations)
    setShow(!show)

    setTimeout(function(){
      console.log(animation, 'COMIENZO');
      setAnimation({});
      console.log(animation, 'FINAL');
      setShow(!show)
  }, 2000);


  }
  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.main
        className='about'
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5, type: "spring", },
        }}
        >

        <motion.div
          className='about_img'
          /* animate={animation === false ? {} : houseA} */
        >
          <h1>About</h1>
          <img src={Planet} alt="planet" />
        </motion.div>

          {
            !show  ? (
              <div className='about_grid'>
                
                <div className='about_link pointer about_house' onClick={() => animationOn(transitions.me)}>
                  <span>House</span>
                  <img src={Señal} alt="señal" />
                </div>

              </div>
            ) : (
              <></>
            )
          }

      </motion.main>
    </Container>
  )
}

export default About