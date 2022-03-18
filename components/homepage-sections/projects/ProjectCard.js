import Button from '../../ui/navigation/Button';
import SubtleLink from '../../ui/navigation/SubtleLink';
import Description from '../../ui/text/Description';
import Heading from '../../ui/text/Heading';
import Subtitle from '../../ui/text/Subtitle';
import Title from '../../ui/text/Title';
import { blocksFalling, mealsOfChange, wheresJethro } from './Projects';

const ProjectCard = props => {
  const projectInfo = () => {
    switch (props.project) {
      case mealsOfChange:
        return {
          title: 'Meals of Change',
          description:
            'An app that allows users to share their own plant-based recipes. The front-end is built with Next JS and hosted on Vercel, the backend is a Rails API hosted on Heroku, with image hosting on S3.',
          siteUrl: 'https://mealsofchange.com/',
          githubUrl: 'https://github.com/jro31/meals-of-change-front-end',
          anatomyUrl: '', // TODO
          imageSrc: 'images/meals-of-change-mockup.png',
        };
      case wheresJethro:
        return {
          title: "Where's Jethro",
          description: 'This is the description',
          siteUrl: '',
          githubUrl: '',
          anatomyUrl: '', // TODO
          imageSrc: '',
        };
      case blocksFalling:
        return {
          title: 'Blocks Falling',
          description: 'This is the description',
          siteUrl: '',
          githubUrl: '',
          anatomyUrl: '', // TODO
          imageSrc: '',
        };
      default:
        throw new Error(`Unrecognised project '${props.project}' passed to ProjectCard`);
    }
  };

  return (
    <div className='snap-start flex h-full bg-gradient-to-bl from-lime-300 to-violet-700 scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl min-h-[80vh] lg:min-h-0'>
      <div className='flex flex-col justify-around basis-1/3 pl-16'>
        <div className='flex flex-col gap-6'>
          <Subtitle className=''>{projectInfo().title}</Subtitle>
          <Description>
            {projectInfo().description}
            <br />
            <a
              href={projectInfo().anatomyUrl}
              target='_blank'
              rel='noreferrer'
              className='underline underline-offset-4'
            >
              Anatomy of a project
            </a>
          </Description>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <a href={projectInfo().siteUrl} target='_blank' rel='noreferrer'>
            <Button>Visit site</Button>
          </a>
          <a href={projectInfo().githubUrl} target='_blank' rel='noreferrer'>
            <SubtleLink underline arrow background='dark'>
              View on Github
            </SubtleLink>
          </a>
        </div>
      </div>
      <div className='flex items-center basis-2/3 p-6'>
        <img
          src={projectInfo().imageSrc}
          alt={projectInfo().title}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
