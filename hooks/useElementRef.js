import useElementRefs from './useElementRefs';

const useElementRef = () => {
  const elementRefs = useElementRefs();

  const elementRef = elementName => {
    const refsObj = elementRefs();

    if (!refsObj[elementName]) {
      throw new Error(`Unrecognised element name '${elementName}' passed to useElementRef`);
    }

    return refsObj[elementName];
  };

  return elementRef;
};

export default useElementRef;
