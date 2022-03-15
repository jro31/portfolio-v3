import useElementRefs from './useElementRefs';

const useElementRef = () => {
  const elementRefs = useElementRefs();

  const elementRef = element => {
    const refsObj = elementRefs();

    if (!refsObj[element]) {
      throw new Error(`Unrecognised element '${element}' passed to useElementRef`);
    }

    return refsObj[element];
  };

  return elementRef;
};

export default useElementRef;
