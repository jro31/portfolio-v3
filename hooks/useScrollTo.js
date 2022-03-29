import { refElementNames } from '../pages';
import useElementDistanceFromTopOfPage from './useElementDistanceFromTopOfPage';

const useScrollTo = () => {
  const elementDistanceFromTopOfPage = useElementDistanceFromTopOfPage();

  const scrollTo = element => {
    if (!refElementNames.includes(element))
      throw new Error(`Unknown section '${section}' passed to useScrollTo`);

    window.scrollTo({ top: elementDistanceFromTopOfPage(element), behavior: 'smooth' });
  };

  return scrollTo;
};

export default useScrollTo;
