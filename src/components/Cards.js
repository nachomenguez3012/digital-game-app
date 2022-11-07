import React from "react";
import ChartRow from "./CardsRow";

let tableRowsData = [
    {
        Title: "spider-man",
        Compatibility: ["PS4", "PS5", "XBOX ONE", "XBOX 360", "NINTENDO SWITCH"],
        Genres: ["Accion", "Aventura"],
        Gamemodes: "1 jugador",
        Idiom: ["Español", "Ingles"],
        Launch: "Thu Sep 06 2018 21:00:00 GMT-0300 (hora estándar de Argentina)",
        Price: 7500,
    },
    {
        Title: "Far Cry 6",
        Compatibility: ["PS4", "PS5", "XBOX ONE"],
        Genres: ["Accion", "Disparos", "Aventura"],
        Gamemodes: ["1 jugador", "Cooperativo"],
        Idiom: ["Español", "Ingles"],
        Launch: "Fri Jul 09 2021 21:00:00 GMT-0300 (hora estándar de Argentina)",
        Price: 3599,
    },
    
]


function Chart (){
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Compatibilidad</th>
                                <th>Género</th>
                                <th>Modo de juego</th>
                                <th>Idioma</th>
                                <th>Lanzamiento</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Compatibilidad</th>
                                <th>Género</th>
                                <th>Modo de juego</th>
                                <th>Idioma</th>
                                <th>Lanzamiento</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;