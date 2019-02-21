
import React from 'react';
import CardGrid from '../components/gallery-page/CardGrid'
import styles from './gallery.css';
import { connect } from 'dva';
import NavBar from '../components/landing-page/NavBar'


const Gallery = ({dispatch, navItems,recipeList})=>{
  function handleClick(id){
    console.log(id)
  }
  return (
    <div>
      <NavBar navItems = {navItems} handleClick = {handleClick} />
      <CardGrid pageNum = {0} recipeList = {recipeList}/>
    </div>
  );
}

export default connect(({recipeList, navItems})=>({recipeList, navItems}))(Gallery);

