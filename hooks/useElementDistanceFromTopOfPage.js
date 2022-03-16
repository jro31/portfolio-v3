import useElementRef from './useElementRef';

const useElementDistanceFromTopOfPage = () => {
  const elementRef = useElementRef();

  const elementDistanceFromTopOfPage = elementName => {
    return window.scrollY + elementRef(elementName).current.getBoundingClientRect().top;
  };

  return elementDistanceFromTopOfPage;
};

export default useElementDistanceFromTopOfPage;
