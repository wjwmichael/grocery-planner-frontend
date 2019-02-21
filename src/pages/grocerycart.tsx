
import React from 'react';

import styles from './grocerycart.css';

import { connect } from 'dva';
import RecipeList from '../components/grocery-cart-page/RecipeList'
import NavBar from '../components/landing-page/NavBar'

const GroceryCart = ({dispatch,recipeCart,navItems})=>{
  function handleDelete(id){
    dispatch({
      type: 'recipeCart/delete',
      payload: id,
    });
  };
  function handleCountChange(id,value){
    dispatch({
      type: 'recipeCart/change',
      payload: {
        id,
        value
      },
    });
  }

  function handleClick(id){
    console.log(id)
  }
  return (
    <div>
      <NavBar navItems = {navItems} handleClick = {handleClick} />
      <div className={styles.cartwrapper}>
            <h2>Recipe Shopping Cart</h2>
            <RecipeList onDelete={handleDelete} recipeCart={recipeCart} onChange={handleCountChange}/>
      </div>
    </div>
    
  );
};


export default connect(({recipeCart, navItems})=>({recipeCart, navItems}))(GroceryCart);