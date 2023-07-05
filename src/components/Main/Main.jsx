import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import { useEffect } from 'react';

function Main() {

  useEffect(() => {
    document.title = "Movies - главная";
  }, []);

  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
