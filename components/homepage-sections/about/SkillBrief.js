import CodingIcon from '../../ui/svg/CodingIcon';
import PlaceholderIcon from '../../ui/svg/PlaceholderIcon';
import Heading from '../../ui/text/Heading';

const SkillBrief = props => {
  const skillDetails = () => {
    switch (props.skill) {
      case 'coding':
        return {
          icon: <CodingIcon colorClass='rose-500' />,
          headingText: 'Website development and maintenance',
          description: 'Specialising in Ruby on Rails, React and Next JS',
        };
      case 'templateSkill': // TODO - Delete this
        return {
          icon: <PlaceholderIcon colorClass='blue-500' />,
          headingText: 'This is some random text to be updated later',
          description:
            'It is better to have loved and lost, than to have never loved at all. Apparently.',
        };
      default:
        throw new Error(`Invalid skill '${props.skill}' passed to SkillBrief`);
    }
  };

  return (
    <div className='flex'>
      <div className='basis-1/6'>{skillDetails().icon}</div>
      <div className='flex flex-col justify-center basis-5/6'>
        <Heading>{skillDetails().headingText}</Heading>
        <div>{skillDetails().description}</div>
      </div>
    </div>
  );
};

export default SkillBrief;
