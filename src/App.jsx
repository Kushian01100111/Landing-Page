import { useState, useEffect } from 'react'
import {motion as m} from "framer-motion"
import Video from "./assets/VideoPrincipal.mp4"
import Banner from "./assets/Banner.png"
import './App.css'

function App() {
  const [button, setButton] = useState(false)
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
                <img src={Banner} alt="Hacé crecer tus ventas en el mundo digital"  className='banner'/>
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
