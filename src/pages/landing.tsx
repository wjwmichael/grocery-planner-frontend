
import React from 'react';
import NavBar from '../components/landing-page/NavBar'
import Content from '../components/landing-page/Content'
import { connect } from 'dva';
import styles from './landing.css';


const Landing = ({ dispatch, navItems }) => {
  function handleClick(id){
    console.log(id)
  }

  return (

    <div className={styles.normal}>
      <NavBar navItems = {navItems} handleClick = {handleClick} />
      <div className={styles.wrapper}>
        <div className={styles.button_wrapper}>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default connect(({navItems}) => ({
  navItems,
}))(Landing);
