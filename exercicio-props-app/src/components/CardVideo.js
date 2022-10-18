import React from "react";
import { InfoUsuario } from "./InfoUsuario"
const titulo = "Uma bela imagem"

export function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1" alt="" />
                <h4>Título: {titulo}</h4>
                <InfoUsuario nome="Thiago Gagliari" />
            </div>
        </div>
    );
}