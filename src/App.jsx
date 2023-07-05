import { useState, useEffect } from 'react'
import {motion as m} from "framer-motion"
import Video from "./assets/VideoPrincipal.mp4"
import './App.css'

function App() {
  const [button, setButton] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
  const firstAnimation = {
    initial: {y:80, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.5
    }}
  }

  return (
    <div className='App'>
        <section className='main'>
          <m.div className='mainText'
          variants={firstAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}>
              <div className='area'>
                <h1>Hace Crecer con tu negocio</h1>
                <m.h1 animate={
                  width <= 370 ? {x: 34, y: -25}
                  : width <= 500 ? {x: 106, y: -34}
                  : width <= 1090 ? {x: 167, y: -48}
                 : width <= 1200 ? {x: 186, y: -59}
                  : {x: 315, y: -65}}  
                className='parti2'> - en el </m.h1>
                <m.h1 animate={
                  width <= 370 ? {x: 7, y: -25}
                  : width <= 500 ? {x: 63, y: -31}
                  : width <= 1090 ? {x: 42, y: -50}
                 : width <= 1200 ? {x: 99, y: -58}
                  : {x: 99, y: -58} } 
                className='parti2'>mundo digital.</m.h1>
              </div>
              <p>Queremos acompañarte a que tu empresa se expanda y que sean cada vez las personas que conozcan tus productos y servicios</p>
              <a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer"
              onMouseEnter={() => setButton(true)}
              onMouseLeave={() => setButton(false)}
              onTouchStart={() => setButton(true)}
              onTouchEnd={() => setButton(false)}>
              <m.button 
              animate={button ? {scale: 1.05}: ""}
              transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.4}}
              >AGENDA TU LLAMADA</m.button></a>
          </m.div>
          <m.div className='mainVideo'
          variants={firstAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}>
            <video src={Video}  className='video' autoPlay controls loop></video>
          </m.div>
        </section>
        <section className='futurePage'>
          <div>

          </div>
        </section>
    </div>
  )
}

export default App
