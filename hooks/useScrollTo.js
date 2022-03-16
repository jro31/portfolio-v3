import { refElementNames } from '../pages';
import useElementRef from './useElementRef';

const useScrollTo = () => {
  const elementRef = useElementRef();

  const scrollTo = element => {
    if (!refElementNames.includes(element))
      throw new Error(`Unknown section '${section}' passed to useScrollTo`);

    elementRef(element).current.scrollIntoView({ behavior: 'smooth' });
  };

  return scrollTo;
};

export default useScrollTo;
