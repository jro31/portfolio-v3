import { useRouter } from 'next/router';

import { sectionOrder } from '../pages';

const useScrollTo = () => {
  const router = useRouter();

  const scrollTo = section => {
    if (!sectionOrder.includes(section)) throw new Error('Unknown section passed to useScrollTo');

    router.replace(`/#${section}`);
  };

  return scrollTo;
};

export default useScrollTo;
