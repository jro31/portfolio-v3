import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import CodingIcon from '../../ui/svg/CodingIcon';
import PlaceholderIcon from '../../ui/svg/PlaceholderIcon';
import Heading from '../../ui/text/Heading';
import { aboutSection } from '../../../pages';

const SkillBrief = props => {
  const aboutSectionHasBeenDisplayed = useSelector(
    state => state.sections.sectionHasBeenDisplayed[aboutSection]
  );

  const skillDetails = () => {
    switch (props.skill) {
      case 'coding':
        return {
          backgroundColorClass: 'bg-teal-300/20',
          icon: <CodingIcon color='rgb(20 184 166)' />,
          headingText: 'Website development and maintenance',
          description: 'Specialising in Ruby on Rails, React and Next JS',
        };
      case 'templateSkill': // TODO - Delete this
        return {
          backgroundColorClass: 'bg-rose-300/20',
          icon: <PlaceholderIcon color='rgb(244 63 94)' />,
          headingText: 'This is some random text to be updated later',
          description:
            'It is better to have loved and lost, than to have never loved at all. Apparently.',
        };
      default:
        throw new Error(`Invalid skill '${props.skill}' passed to SkillBrief`);
    }
  };

  return (
    // START HERE TOMORROW
    <CSSTransition
      mountOnEnter
      in={aboutSectionHasBeenDisplayed}
      timeout={1000}
      classNames={{ enterActive: 'animate-slow-fade-in-right' }}
    >
      <div className='flex'>
        <div className='basis-1/6'>
          <div
            className={`w-1/2 box-border p-3 rounded-1/2 ${skillDetails().backgroundColorClass}`}
          >
            {skillDetails().icon}
          </div>
        </div>
        <div className='flex flex-col justify-center basis-5/6 gap-4'>
          <Heading>{skillDetails().headingText}</Heading>
          <div className='text-slate-500'>{skillDetails().description}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SkillBrief;
