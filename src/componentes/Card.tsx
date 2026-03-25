
interface card_props{
  cardName: string;
  cardImagem: string;
  velocidade_Maxima: number;
  potencia: number;
  zero_cem: number;
  preco: number;
}




export const Card = ({ cardName, cardImagem, velocidade_Maxima, potencia, zero_cem, preco  }:card_props) => {
 
  return (
    <>
      <div className='cardDiv1'>
        <h2 className='cardName'>{cardName}</h2>
        <img
          className='cardImagem'
          src={cardImagem}
          alt={cardName}
          />
        <p className='cardAtributo'>Velocidade Máxima: {velocidade_Maxima}km/h</p>
        <p className='cardAtributo'>Potência: {potencia}cv</p>
        <p className='cardAtributo'>0–100 km/h: {zero_cem}S</p>
        <p className='cardAtributo'>Preço: cerca de US$ {preco}</p>
       
      </div>
    </>
  )
}

export default Card
