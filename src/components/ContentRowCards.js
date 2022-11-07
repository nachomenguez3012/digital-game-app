import React from "react";
import SmallCard from "./SmallCard";

/* <!-- Products in DB --> */
let productsInDB = {
    title: "Products in Data Base",
    color: "primary", 
    cuantity: 50,
    icon: "fa-clipboard-list"
}

/* <!-- Total Categories --> */
let totalcategories = {
    title:"Total categories", 
    color:"success", 
    cuantity: 10,
    icon:"fa-award"
}

/* <!-- Total Users --> */
let totalUsers = {
    title:"Total users" ,
    color:"warning",
    cuantity: 4,
    icon:"fa-user-check"
}

let cartProps = [productsInDB, totalcategories, totalUsers];

function ContentRowCards(){
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowCards;