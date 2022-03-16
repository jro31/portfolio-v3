import useElementRef from './useElementRef';

const useElementHeight = () => {
  const elementRef = useElementRef();

  const elementHeight = elementName => elementRef(elementName).current.clientHeight;

  return elementHeight;
};

export default useElementHeight;
