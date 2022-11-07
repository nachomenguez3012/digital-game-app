import React from "react";
import imagenFondo from "../assets/images/SPIDERMAN.jpg";

function LastGameIndDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo juego en la Base de Datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Spiderman protagoniza este videojuego de acción desarrollado por Insomniac Games, los autores de Resistance y Ratchet & Clank entre otros, en exclusiva para PS4. La historia de esta aventura es totalmente original y nos pone en el rol de un Peter Parker experimentado y maduro que debe lidiar con los problemas que suponen el tener que salvar Manhattan de los peores criminales o villanos y compatibilizarlo con su vida personal. De hecho, el trepamuros de Marvel se enfrenta a varios de sus peores enemigos, poniendo a pruebas las habilidades del alter-ego más acrobático de Parker. En el espectacular Marvel's Spider-Man te esperan saltos, combos de combates, carreras y acrobacias aprovechando el uso de técnicas de Parkour y muchas, muchas telarañas gestionadas por un extenso y variado sistema de combos y habilidades que ofrecen gran libertad de movimientos y posibilidades. Spiderman en PlayStation 4 cuenta con intensa acción, pero también con mecánicas de sigilo y un apartado visual impactante y muy cinematográfico para crear unas cinemáticas de auténtico infarto.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del juego</a>
                </div>
            </div>
        </div>
    )
}

export default LastGameIndDb;
