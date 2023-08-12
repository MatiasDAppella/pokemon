// Styles & images
import style from './Landing.module.less';
import landingImage from '../../assets/img/pokemon.png';
import logoImage from '../../assets/img/logo.png';
import handImage from '../../assets/icons/hand.png';

// Article images
import searchArticleImage from '../../assets/img/landing/search-pokemon.png';
import detailArticleImage from '../../assets/img/landing/detail.png';
import sortArticleImage from '../../assets/img/landing/sort-pokemon.png';
import catchArticleImage from '../../assets/img/landing/catch-pokemon.png';
import createArticleImage from '../../assets/img/landing/create-pokemon.png';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Landing = () => {
  const { ref: navigateToBottom, inView: visible } = useInView()
  const navigate = useNavigate()

  const handleClick = () => {
    window.scrollTo({ top: 0 });
    navigate('/home')
  };

  return <>
    <div ref={navigateToBottom}></div>

    <header>
      <div className={style.imageBackground}>
        <img src={landingImage} alt="pokémon main image" />
      </div>
    </header>

    <div className={style.titleBox}>
      <img src={logoImage} className={style.title} alt="logo image" />
      {(visible) && <img src={handImage} className={style.hand} alt="hand" />}
    </div>

    <main className={style.main}>
      <section className={style.sectionLeft}>
        <div>
          <h3>Search</h3>
          <p>for pokemons in the area, they can be called by their name.</p>
        </div>
        <img src={searchArticleImage} alt="search image" />
      </section>

      <section className={style.sectionRight}>
        <div>
          <h3>Detail</h3>
          <p>them, you can see their stats in battle.</p>
        </div>
        <img src={detailArticleImage} alt="detail image" />
      </section>

      <section className={style.sectionLeft}>
        <div>
          <h3>Sort</h3>
          <p>by stroke, defense, health points, speed or alphabetically.</p>
        </div>
        <img src={sortArticleImage} alt="sort image" />
      </section>

      <section className={style.sectionRight}>
        <div>
          <h3>Catch</h3>
          <p>them all! Use your pokeball to collect all you want.</p>
        </div>
        <img src={catchArticleImage} alt="catch image" />
      </section>

      <section className={style.sectionLeft}>
        <div>
          <h3>Create</h3>
          <p>your personalized pokemons and save them in pokeball.</p>
        </div>
        <img src={createArticleImage} alt="create image" />
      </section>
    </main>

    <button onClick={handleClick} className={style.enter}>Enter</button>

    <footer>
      <h4>- Made by Matias Appella -</h4>
    </footer>
  </>
};

export default Landing;