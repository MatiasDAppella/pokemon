// Styles & icons
import style from './Home.module.less';
import githubIcon from '../../assets/icons/github.png'
import instagramIcon from '../../assets/icons/instagram.png'

// Hooks
import { useState } from 'react';

// Components
import Pokemons from './Pokemons/Pokemons';
import Navigate from './Navigate/Navigate';

const Home = () => {

  return <div className={style.homePage}>
    <Navigate/>
    <main>
      <Pokemons/>
    </main>
    <footer>
      <div className={style.footerContainer}>
        <h3>Made by Matias Appella</h3>
        <div className={style.socialLinks}>
          <a href="https://github.com/MatiasDAppella" target='_blank'><img className={style.githubIcon} src={githubIcon} alt="" /></a>
          <a href="https://www.instagram.com/matiiapp/" target='_blank'><img className={style.instagramIcon} src={instagramIcon} alt="" /></a>
        </div>
      </div>
    </footer>
  </div>
};

export default Home;