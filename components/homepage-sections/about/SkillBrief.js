import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import CodingIcon from '../../ui/svg/CodingIcon';
import PlaceholderIcon from '../../ui/svg/PlaceholderIcon';
import Heading from '../../ui/text/Heading';
import { aboutSection, aboutSkills } from '../../../pages';

const SkillBrief = props => {
  const skillsHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[aboutSkills]
  );

  const enterActiveClassName = () => {
    // TODO - Instead of delaying the transition with a class, delay setting the 'in' prop on the transition
    // Will make it easier to work with and more scalable
    switch (props.position) {
      case 1:
        return 'animate-delayed-fade-in-1';
      case 2:
        return 'animate-delayed-fade-in-2';
      case 3:
        return 'animate-delayed-fade-in-3';
      default:
        throw new Error(`Invalid position '${props.position}' passed to SkillBrief`);
    }
  };

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
    <CSSTransition
      mountOnEnter
      in={skillsHasBeenInView}
      timeout={1000 + (props.position * 500)} // prettier-ignore
      classNames={{ enterActive: enterActiveClassName() }}
    >
      <div className='flex gap-4 lg:gap-0'>
        <div className='basis-1/6 xs:basis-1/8 lg:basis-1/6'>
          <div
            className={`w-full lg:w-1/2 box-border p-3 rounded-1/2 ${
              skillDetails().backgroundColorClass
            }`}
          >
            {skillDetails().icon}
          </div>
        </div>
        <div className='flex flex-col justify-center basis-5/6 xs:basis-7/8 lg:basis-5/6 gap-4'>
          <Heading>{skillDetails().headingText}</Heading>
          <div className='text-slate-500'>{skillDetails().description}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SkillBrief;
