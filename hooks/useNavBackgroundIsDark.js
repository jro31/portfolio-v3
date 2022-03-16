import { useSelector } from 'react-redux';

import { darkSections, sectionOrder } from '../pages';

const useNavBackgroundIsDark = () => {
  const elementIsInView = useSelector(state => state.elementIsInView.isInView);

  const navBackgroundIsDark = () =>
    darkSections.includes(sectionOrder.find(section => elementIsInView[section]));

  return navBackgroundIsDark;
};

export default useNavBackgroundIsDark;
