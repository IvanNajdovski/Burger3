import React from 'react';
import './Order.modules.css';

const order = (props) => {
    const ingredients = [];
    for(let item in props.ingredients){
         ingredients.push({name:item, amount: props.ingredients[item]})
      }
    const output = ingredients.map(val => {
        return(
            <li key={val.name} style={{textTransform: "capitalize"}}>{val.name}: {val.amount}</li>
        )
    });
    return(
        <div className="Order">
            <p>Ingredients: </p>
            <ul>
                {output}
            </ul>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    )
};
export default order;