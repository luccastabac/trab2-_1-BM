import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cardDiv'>
        <h2 className='cardName'>McLaren P1</h2>
        <img
          className='cardImagem'
          src='https://website-images.mclaren.com/3029/mclaren-legacy-p1-video-poster.jpg'
          alt=''
        />
        <p className='cardAtributo'>Velocidade Máxima: 350 km/h</p>
        <p className='cardAtributo'>Potência: 916 cv</p>
        <p className='cardAtributo'>0–100 km/h: 2,8 s</p>
        <p className='cardAtributo'>Preço: cerca de US$ 1.150.000</p>
       
      </div>
    </>
  )
}

export default App
