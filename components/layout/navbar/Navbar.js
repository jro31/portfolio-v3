import useScrollTo from '../../../hooks/useScrollTo';
import { sectionOrder } from '../../../pages';

const Navbar = () => {
  const scrollTo = useScrollTo();

  const handleSectionClick = section => {
    scrollTo(section);
  };

  return (
    <div className='fixed top-0 h-navbar-height w-full box-border bg-transparent'>
      {sectionOrder.map(section => (
        <div onClick={() => handleSectionClick(section)} key={section}>
          {section}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
