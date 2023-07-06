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
                <h1 className='h1'>Hace Crecer tus ventas</h1>
                <m.hr animate={
                  width <= 370 ? {x: 82, y: -16}
                  : width <= 500 ? {x: 128, y: -22}
                  : width <= 960 ? {x: -199, y: 19}  
                  : width <= 1090 ? {x: -256, y: 21}
                 : width <= 1200 ? {x: -313, y: 19}
                  : {x: -337, y: 12}}/>
                <m.h1 animate={
                  width <= 370 ? {x: 141, y: -30}
                  : width <= 500 ? {x: 201, y: -37}
                  : width <= 960 ? {x: -80, y: -4}  
                  : width <= 1090 ? {x: 50, y: -4}
                 : width <= 1200 ? {x: 0, y: -6}
                  : {x: -48, y: -17}}  
                className='parti2'> en el </m.h1>
                <m.h1 animate={
                  width <= 370 ? {x: 77, y: -28}
                  : width <= 500 ? {x: 94, y: -31}
                  : width <= 960 ? {x: 174, y: -53} 
                  : width <= 1090 ? {x: 194, y: -51}
                 : width <= 1200 ? {x: 153, y: -60}
                  : {x: 135, y: -80} } 
                className='parti2 parti3'>mundo digital.</m.h1>
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
