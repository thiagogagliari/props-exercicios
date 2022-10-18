import React from 'react';
import "./styles.css"
import { CardVideo } from './components/CardVideo';

export default function App() {

  const obj1 = {
    titulo: "Video 1",
    autor: "Thiago"
  }
  const obj2 = {
    titulo: "Video 2",
    autor: "Mayara"
  }
  const obj3 = {
    titulo: "Video 3",
    autor: "Isabella",
  }
  const obj4 = {
    titulo: "Vídeo 4",
    autor: "Nelma",
  }
  const obj5 = {
    titulo: "Vídeo 5",
    autor: "Maria",
  }
  const obj6 = {
    titulo: "Vídeo 6",
    autor: "Airton",
  }
  const obj7 = {
    titulo: "Vídeo 7",
    autor: "Paula",
  }
  const obj8 = {
    titulo: "Video 8",
    autor: "Rodrigo",
  }
  return (
    <div>
      <div className="tela-Inteira">
       <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoBusca" />
       </header>

     <main>
      <nav className="menu-vertical">
        <ul>
          <li className="botoes-menu-vertical">Início</li>
          <li className="botoes-menu-vertical">Em alta</li>
          <li className="botoes-menu-vertical">Inscrições</li>
          <hr />
          <li className="botoes-menu-vertical">Originais</li>
          <li className="botoes-menu-vertical">Histórico</li>
        </ul>
      </nav>

      <section className="painel-de-videos">
        <CardVideo obj1={obj1}/>
        <CardVideo obj2={obj2}/>
        <CardVideo obj3={obj3}/>
        <CardVideo obj4={obj4}/>
        <CardVideo obj5={obj5}/>
        <CardVideo obj6={obj6}/>
        <CardVideo obj7={obj7}/>
        <CardVideo obj8={obj8}/>

      </section>
     </main>

     <footer>
      <h4>Oi, Eu moro no footer!</h4>
     </footer>
     </div>
    </div>
  );
}

