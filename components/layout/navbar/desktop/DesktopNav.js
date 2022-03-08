import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useScrollTo from '../../../../hooks/useScrollTo';
import { sectionOrder } from '../../../../pages';
import SubtleLink from '../../../ui/navigation/SubtleLink';
import useLiveSection from '../../../../hooks/useLiveSection';
import useIsDarkBackground from '../../../../hooks/useIsDarkBackground';
import { navbarActions } from '../../../../store/navbar';
import Link from 'next/link';

const DesktopNav = () => {
  const dispatch = useDispatch();
  const navbarIsVisible = useSelector(state => state.navbar.isVisible);
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const scrollTo = useScrollTo();
  const liveSection = useLiveSection();
  const isDarkBackground = useIsDarkBackground();

  const handleSectionClick = section => {
    scrollTo(section);
  };

  useEffect(() => {
    if (!navbarIsVisible) {
      if (windowScrollYPosition && windowHeight && windowScrollYPosition >= windowHeight) {
        dispatch(navbarActions.showNavbar());
      }
    }
  }, [dispatch, navbarIsVisible, windowHeight, windowScrollYPosition]);

  return (
    <CSSTransition
      mountOnEnter
      in={navbarIsVisible}
      timeout={1000}
      classNames={{ enterActive: 'animate-slow-fade-in lg:animate-slide-in-right' }}
    >
      <div className='fixed top-0 left-3 bg-transparent z-50'>
        <div className='hidden lg:flex h-navbar-height w-screen justify-around items-center'>
          {sectionOrder.map(section => (
            <Link href={`#${section}`} key={`desktop-nav-${section}-link`} shallow>
              <a>
                <SubtleLink
                  underline={liveSection() === section}
                  background={isDarkBackground() ? 'dark' : 'light'}
                  // onClick={() => handleSectionClick(section)}
                >
                  {section}
                </SubtleLink>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default DesktopNav;
