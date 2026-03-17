import { useState } from 'react'
import './App.css'

function Card({ velocidade_Maxima, potencia, zero_cem, preco}) {
 
  return (
    <>
      <div className='cardDiv'>
        <h2 className='cardName'>McLaren P1</h2>
        <img
          className='cardImagem'
          src='https://website-images.mclaren.com/3029/mclaren-legacy-p1-video-poster.jpg'
          alt=''
        />
        <p className='cardAtributo'>Velocidade Máxima: {velocidade_Maxima}</p>
        <p className='cardAtributo'>Potência: {potencia}</p>
        <p className='cardAtributo'>0–100 km/h: {zero_cem}</p>
        <p className='cardAtributo'>Preço: cerca de US$ {preco}</p>
       
      </div>
    </>
  )
}

export default Card
