import Button from '../../ui/navigation/Button';
import SubtleLink from '../../ui/navigation/SubtleLink';

const ProjectLinks = props => {
  return (
    <div className='flex flex-col xs:flex-row xs:justify-center items-center xs:gap-2 lg:gap-6 w-full'>
      <a href={props.siteUrl} target='_blank' rel='noreferrer' className='w-full xs:w-auto'>
        <Button>Visit site</Button>
      </a>
      <a href={props.githubUrl} target='_blank' rel='noreferrer' className='flex items-center'>
        <SubtleLink underline arrow background='dark'>
          View on Github
        </SubtleLink>
      </a>
    </div>
  );
};

export default ProjectLinks;
