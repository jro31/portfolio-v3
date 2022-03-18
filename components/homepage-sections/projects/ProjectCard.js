import Subtitle from '../../ui/text/Subtitle';
import ProjectDescription from './ProjectDescription';
import ProjectLinks from './ProjectLinks';
import ProjectMockup from './ProjectMockup';
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
    <div className='snap-start flex flex-col lg:flex-row bg-gradient-to-bl from-lime-300 to-violet-700 scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl lg:min-h-0'>
      <div className='flex flex-col justify-around basis-1/3 px-6 xs:px-8 2xl:pl-16 2xl:pr-0 py-6 gap-6'>
        <Subtitle>{projectInfo().title}</Subtitle>
        <div className='flex lg:hidden p-6'>
          <ProjectMockup
            src={projectInfo().imageSrc}
            alt={projectInfo().title}
            className='w-full h-full object-contain'
          />
        </div>
        <ProjectDescription
          description={projectInfo().description}
          anatomyUrl={projectInfo().anatomyUrl}
        />
        <ProjectLinks siteUrl={projectInfo().siteUrl} githubUrl={projectInfo().githubUrl} />
      </div>
      <div className='hidden lg:flex items-center basis-2/3 p-6'>
        <ProjectMockup
          src={projectInfo().imageSrc}
          alt={projectInfo().title}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
