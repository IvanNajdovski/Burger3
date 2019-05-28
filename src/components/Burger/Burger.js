import React from 'react';
import './Burger.modules.css';
import { withRouter } from 'react-router-dom';

import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = "";
    //if(props.ingredients){
        transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])]
                    .map((_, index) => {
                        return <BurgerIngredient key={igKey + index} type={igKey}/>
                    });
            })
            .reduce((start, val) => {
                return start.concat(val)
            },[]);
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please Start Adding Ingredients</p>
        }
    // }else{
    //     props.history.replace("/")
    // }


    return(
        <div className="Burger">
            <BurgerIngredient type={"bread-top"}/>
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    )
};

export default withRouter(burger);