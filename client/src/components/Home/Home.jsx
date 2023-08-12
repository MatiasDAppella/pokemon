// Styles & icons
import style from './Home.module.less';
import githubIcon from '../../assets/icons/github.png'
import instagramIcon from '../../assets/icons/instagram.png'

// Hooks
import { useInView } from 'react-intersection-observer';

// Components
import Pokemons from './Pokemons/Pokemons';
import Navigate from './Navigate/Navigate';

const Home = () => {
  const { ref: navigate, inView: visible } = useInView()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <div className={style.homePage}>
    <Navigate/>
    <div ref={navigate}></div>
    {(!visible) && <button onClick={scrollToTop} className={style.upButton}>^</button>}

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