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
          title: "Where's Jethro?",
          description:
            'An app that allows me to "check-in" my current location using my phone\'s GPS, plotting that location onto a map. The front-end is build with React and hosted on Netlify, the backend is a Rails API hosted on Heroku, with image hosting on Cloudinary.',
          siteUrl: 'https://wheresjethro.com/',
          githubUrl: 'https://github.com/jro31/wheres-jethro-front-end',
          anatomyUrl: '', // TODO
          imageSrc: 'images/wheres-jethro-mockup.png',
        };
      case blocksFalling:
        return {
          title: 'Blocks Falling',
          description:
            'An indistinct game where players much neatly fit into lines blocks that fall at ever-increasing speeds, by moving and rotating them. Built with React and hosted on Firebase.',
          siteUrl: 'https://blocksfalling.com/',
          githubUrl: 'https://github.com/jro31/blocks-falling',
          anatomyUrl: '', // TODO
          imageSrc: 'images/blocks-falling-mockup.png',
        };
      default:
        throw new Error(`Unrecognised project '${props.project}' passed to ProjectCard`);
    }
  };

  return (
    <div className='snap-start flex flex-col lg:flex-row bg-gradient-to-bl from-slate-700 via-slate-400 to-slate-700 scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl lg:min-h-0 border-2 border-slate-400'>
      <div className='flex flex-col justify-around lg:basis-5/12 2xl:basis-1/3 px-6 xs:px-8 2xl:pl-16 lg:pr-0 py-6 gap-6'>
        <Subtitle>{projectInfo().title}</Subtitle>
        <div className='flex lg:hidden'>
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
        {/* FIXME - The links aren't aligned on mobile; adjacent cards have the buttons in a different position. Probably just push them to the bottom of all cards. */}
        <ProjectLinks siteUrl={projectInfo().siteUrl} githubUrl={projectInfo().githubUrl} />
      </div>
      <div className='hidden lg:flex items-center basis-7/12 2xl:basis-2/3 pl-0 2xl:pl-6 pr-6 py-6'>
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
