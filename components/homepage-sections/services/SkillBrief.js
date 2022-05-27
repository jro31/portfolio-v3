import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import CodingIcon from '../../ui/svg/CodingIcon';
import Heading from '../../ui/text/Heading';
import { servicesPoints } from '../../../pages';
import { codebaseMaintenance, coding, featureBuilding } from './Services';
import CleanCodeIcon from '../../ui/svg/CleanCodeIcon';
import MultimediaIcon from '../../ui/svg/MultimediaIcon';

const SkillBrief = props => {
  const skillsHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[servicesPoints]
  );

  const enterActiveClassName = () => {
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
      case coding:
        return {
          backgroundColorClass: 'bg-cyan-400/20',
          icon: <MultimediaIcon color='rgb(45 212 191)' />,
          headingText: 'Website building',
          description:
            'Responsive, maintainable applications, built with love. You dream it, I build it!',
        };
      case featureBuilding:
        return {
          backgroundColorClass: 'bg-indigo-600/20',
          icon: <CleanCodeIcon color='rgb(79 70 229)' />,
          headingText: 'API development',
          description: "A customised backend allows you to get the most of your website's data.",
        };
      case codebaseMaintenance:
        return {
          backgroundColorClass: 'bg-fuchsia-500/20',
          icon: <CodingIcon color='rgb(217 70 239)' />,
          headingText: 'Feature building',
          description:
            'Add value to your existing application by adding new sections and features and fixing issues.',
        };
      default:
        throw new Error(`Invalid skill '${props.skill}' passed to SkillBrief`);
    }
  };

  return (
    <CSSTransition
      in={skillsHasBeenInView}
      timeout={1000 + (props.position * 500)} // prettier-ignore
      classNames={{ enterActive: enterActiveClassName() }}
    >
      <div className={`gap-4 lg:gap-0 ${skillsHasBeenInView ? 'flex' : 'hidden'}`}>
        <div className='basis-10 2xs:basis-12 lg:basis-24 flex-none'>
          <div
            className={`w-full lg:w-1/2 box-border p-3 rounded-1/2 ${
              skillDetails().backgroundColorClass
            }`}
          >
            {skillDetails().icon}
          </div>
        </div>
        <div className='flex flex-col justify-center basis-5/6 xs:basis-7/8 lg:basis-5/6 flex-1 gap-4'>
          <Heading>{skillDetails().headingText}</Heading>
          <div className='text-slate-500'>{skillDetails().description}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SkillBrief;
