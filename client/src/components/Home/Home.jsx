// Styles
import style from './Home.module.less';

// Components
import Card from './Card/Card';

const Home = () => {
  return <main>
    <h1>Pokemon home page</h1>
    <ul className={style.container}>
      <Card/>
      <Card/>
    </ul>

  </main>
};

export default Home;