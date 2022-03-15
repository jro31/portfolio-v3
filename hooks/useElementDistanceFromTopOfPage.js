import useElementRef from './useElementRef';

const useElementDistanceFromTopOfPage = () => {
  const elementRef = useElementRef();

  const elementDistanceFromTopOfPage = element => {
    return window.scrollY + elementRef(element).current.getBoundingClientRect().top;
  };

  return elementDistanceFromTopOfPage;
};

export default useElementDistanceFromTopOfPage;
