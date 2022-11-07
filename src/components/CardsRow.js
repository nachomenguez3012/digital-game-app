import React from "react";


function CardsRow(props){
    return (
                <tr>
                    <td>{props.Title}</td> 
                    <td>{props.Compatibility}</td>
                    <td>{props.Genres}</td> 
                    <td>{props.Gamemodes}</td> 
                    <td>{props.Idiom}</td>
                    <td>{props.Launch}</td>
                    <td>{props.Price}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                </tr>
            )
    }
    
        

export default CardsRow;