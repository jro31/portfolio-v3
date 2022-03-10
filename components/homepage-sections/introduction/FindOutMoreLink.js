import useScrollTo from '../../../hooks/useScrollTo';
import SubtleLink from '../../ui/navigation/SubtleLink';
import { sectionOrder } from '../../../pages';

const FindOutMoreLink = props => {
  const scrollTo = useScrollTo();

  return (
    <SubtleLink
      arrow
      underline
      background='dark'
      onClick={() => scrollTo(sectionOrder[1])}
      className={`animate-slow-fade-in ${props.className || ''}`}
    >
      Find out more
    </SubtleLink>
  );
};

export default FindOutMoreLink;
