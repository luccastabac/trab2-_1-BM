import { useState } from "react";
import "./App.css";

type Carro = {
  nome: string;
  imagem: string;
  velocidade: number;
  potencia: number;
  zeroCem: number;
  preco: number;
  raridade: string;
};

function Card(props: Carro) {
  return (
    <div className="card">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt={props.nome} className="cardImagem" />
      <p>Velocidade: {props.velocidade} km/h</p>
      <p>Potência: {props.potencia} cv</p>
      <p>0 a 100: {props.zeroCem}s</p>
      <p>Preço: R$ {props.preco}</p>
      <p>Raridade: {props.raridade}</p>
    </div>
  );
}

function App() {
  const carros: Carro[] = [
    {
      nome: "Bugatti Chiron",
      imagem: "https://www.velhochiconews.com/hf-conteudo/uploads/posts/2024/07/1888_ad0b3997a4a6d2eaf68d6e4882aedead.jpg",
      velocidade: 420,
      potencia: 1500,
      zeroCem: 2.4,
      preco: 15000000,
      raridade: "Lendário",
    },
    {
      nome: "Koenigsegg Jesko",
      imagem: "https://www.thesupercarblog.com/wp-content/uploads/2023/10/Koenigsegg-Jesko-Attack-Plus-Green-spec-3.jpg",
      velocidade: 480,
      potencia: 1600,
      zeroCem: 2.5,
      preco: 18000000,
      raridade: "Lendário",
    },
    {
      nome: "Hennessey Venom F5",
      imagem: "https://s2-autoesporte.glbimg.com/Js1qPEf5VtrlGK4nVKmzgx283pc=/0x0:1500x981/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/Z/U/ASKDKOSZKKSWvSX2HdOQ/hennessey-venom-f5-revolution-roadster-high-1.jpg",
      velocidade: 500,
      potencia: 1817,
      zeroCem: 2.6,
      preco: 20000000,
      raridade: "Lendário",
    },
    {
      nome: "SSC Tuatara",
      imagem: "https://hips.hearstapps.com/mtg-prod/65c41ca2ecd098000862804e/ssc-na-tuatara-36.jpg",
      velocidade: 455,
      potencia: 1750,
      zeroCem: 2.5,
      preco: 17000000,
      raridade: "Raro",
    },
    {
      nome: "Lamborghini Aventador SVJ",
      imagem: "https://www.alainclass.com/wp-content/uploads/2019/04/1170.jpg",
      velocidade: 350,
      potencia: 770,
      zeroCem: 2.8,
      preco: 8000000,
      raridade: "Raro",
    },
    {
      nome: "Ferrari SF90 Stradale",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ferrari_SF90_Stradale.jpg",
      velocidade: 340,
      potencia: 1000,
      zeroCem: 2.5,
      preco: 7000000,
      raridade: "Épico",
    },
    {
      nome: "Porsche 911 Turbo S",
      imagem: "https://cdn.motor1.com/images/mgl/Vznj6y/s3/brabus-900-rocket-r.webp",
      velocidade: 330,
      potencia: 650,
      zeroCem: 2.7,
      preco: 1500000,
      raridade: "Comum",
    },
    {
      nome: "McLaren P1",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/McLaren_P1_GTR_at_Grand_Basel_2018_03.jpg/1280px-McLaren_P1_GTR_at_Grand_Basel_2018_03.jpg",
      velocidade: 350,
      potencia: 916,
      zeroCem: 2.8,
      preco: 1150000,
      raridade: "Raro",
    },
    {
      nome: "Aston Martin Valkyrie",
      imagem: "https://www.topgear.com/sites/default/files/brightcove/videos/images/posters/1546304439_5844286552001_5844282300001-vs.jpg",
      velocidade: 402,
      potencia: 1160,
      zeroCem: 2.5,
      preco: 15000000,
      raridade: "Lendário",
    },
    {
      nome: "Pagani Huayra",
      imagem: "https://cdn.rmsothebys.com/3/e/7/6/3/e/3e763ed063de7afbb4a632d300174dc235879abb.webp",
      velocidade: 383,
      potencia: 730,
      zeroCem: 3.0,
      preco: 14000000,
      raridade: "Épico",
    },
  ];

  const [carro1, setCarro1] = useState<Carro | null>(null);
  const [carro2, setCarro2] = useState<Carro | null>(null);
  const [resultado, setResultado] = useState("");

  function sortearCartas() {
    let i1 = Math.floor(Math.random() * carros.length);
    let i2 = Math.floor(Math.random() * carros.length);

    while (i1 === i2) {
      i2 = Math.floor(Math.random() * carros.length);
    }

    const c1 = carros[i1];
    const c2 = carros[i2];

    setCarro1(c1);
    setCarro2(c2);

    if (c1.velocidade > c2.velocidade) {
      setResultado(c1.nome + " venceu!");
    } else if (c2.velocidade > c1.velocidade) {
      setResultado(c2.nome + " venceu!");
    } else {
      setResultado("Empate!");
    }
  }

  return (
    <div className="geral">
      <h1>React Trunfo</h1>

      <h2 className="subtitulo">Duelo de Cartas</h2>

      <div className="arena">
        {carro1 && <Card {...carro1} />}
        {carro1 && carro2 && <h2>VS</h2>}
        {carro2 && <Card {...carro2} />}
      </div>

      {resultado && <h3 className="resultado">{resultado}</h3>}

      <div className="botoes">
        <button onClick={sortearCartas}>Sortear Cartas</button>
      </div>

      <h2 className="subtitulo">Todas as Cartas</h2>

      <div className="galeria">
        {carros.map((carro, i) => (
          <Card key={i} {...carro} />
        ))}
      </div>
    </div>
  );
}

export default App;
