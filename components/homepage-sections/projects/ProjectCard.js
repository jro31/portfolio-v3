// TODO - Delete any components you're no longer using

import Subtitle from '../../ui/text/Subtitle';
import ProjectDescription from './ProjectDescription';
import ProjectLinks from './ProjectLinks';
import ProjectMockup from './ProjectMockup';
import { blocksFalling, jethrosBistro, jethroCodes, mealsOfChange, wheresJethro } from './Projects';

const ProjectCard = props => {
  const projectInfo = () => {
    switch (props.project) {
      case blocksFalling:
        return {
          title: 'Blocks Falling',
          description:
            'An indistinct game where players much neatly fit into lines blocks that fall at ever-increasing speeds, by moving and rotating them. Built with React and hosted on Firebase.',
          siteUrl: 'https://blocksfalling.com/',
          githubUrl: 'https://github.com/jro31/blocks-falling',
          anatomyUrl: 'https://jethro.codes/projects/blocks-falling',
          imageSrc: 'images/blocks-falling-screenshot.png',
        };
      case jethrosBistro:
        return {
          title: "Jethro's Bistro",
          description:
            'A template restaurant application built with Next.js for search engine optimisation and hosted on Vercel. Includes menus, references, an about page and a contact form. Theme, content and pages can be easily customised for other restaurants and business types.',
          siteUrl: 'https://jethrosbistro.com/',
          githubUrl: '',
          anatomyUrl: '',
          imageSrc: 'images/jethros-bistro-screenshot.png',
        };
      case jethroCodes: {
        return {
          title: 'jethro.codes',
          description:
            'My home for everything code. A Next.js app hosted on Vercel that includes a deep-dive into some of my projects, some of my public templates, and my story, which details how I got into coding and my motivation behind it.',
          siteUrl: 'https://jethro.codes/',
          githubUrl: 'https://github.com/jro31/jethro-codes',
          anatomyUrl: 'https://jethro.codes/projects/jethro-codes',
          imageSrc: 'images/jethro-codes-screenshot.png',
          imagePositionClass: 'object-left',
        };
      }
      case mealsOfChange:
        return {
          title: 'Meals of Change',
          description:
            'An app that allows users to share their own plant-based recipes. The front-end is built with Next JS and hosted on Vercel, the backend is a Rails API hosted on Heroku, with image hosting on S3.',
          siteUrl: 'https://mealsofchange.com/',
          githubUrl: 'https://github.com/jro31/meals-of-change-front-end',
          anatomyUrl: 'https://jethro.codes/projects/meals-of-change',
          imageSrc: 'images/meals-of-change-screenshot.png',
          imagePositionClass: 'object-left',
        };
      case wheresJethro:
        return {
          title: "Where's Jethro?",
          description:
            'An app that allows me to "check-in" my current location using my phone\'s GPS, plotting that location onto a map. The front-end is build with React and hosted on Netlify, the backend is a Rails API hosted on Heroku, with image hosting on Cloudinary.',
          siteUrl: 'https://wheresjethro.com/',
          githubUrl: 'https://github.com/jro31/wheres-jethro-front-end',
          anatomyUrl: '', // TODO
          imageSrc: 'images/wheres-jethro-screenshot.png',
          imagePositionClass: 'object-left',
        };
      default:
        throw new Error(`Unrecognised project '${props.project}' passed to ProjectCard`);
    }
  };

  // TODO - Delete this
  const features = [
    {
      name: 'Durable',
      description:
        'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
      name: 'Refillable',
      description:
        'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
      name: 'Thoughtfully designed',
      description:
        'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    {
      name: 'Locally made',
      description: 'Responsibly and sustainably made real close to wherever you are, somehow.',
    },
  ];

  return (
    // <div className='snap-start flex flex-col lg:flex-row bg-gradient-to-bl from-slate-700 via-slate-400 to-slate-700 scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl lg:min-h-0 border-2 border-slate-400'>
    //   <div className='flex flex-col h-full justify-between lg:justify-around lg:basis-1/2 xl:basis-5/12 2xl:basis-1/3 px-6 xs:px-8 2xl:pl-16 lg:pr-0 py-6 gap-6'>
    //     <Subtitle>{projectInfo().title}</Subtitle>
    //     <div className='flex lg:hidden'>
    //       <ProjectMockup
    //         src={projectInfo().imageSrc}
    //         alt={projectInfo().title}
    //         className='w-full h-full object-contain'
    //       />
    //     </div>
    //     <ProjectDescription
    //       description={projectInfo().description}
    //       anatomyUrl={projectInfo().anatomyUrl}
    //     />
    //     <ProjectLinks siteUrl={projectInfo().siteUrl} githubUrl={projectInfo().githubUrl} />
    //   </div>
    //   <div className='hidden lg:flex items-center basis-1/2 xl:basis-7/12 2xl:basis-2/3 pl-0 2xl:pl-6 pr-6 py-6'>
    //     <ProjectMockup
    //       src={projectInfo().imageSrc}
    //       alt={projectInfo().title}
    //       className='w-full h-full object-contain'
    //     />
    //   </div>
    // </div>

    <div className='snap-start bg-white scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl'>
      <section aria-labelledby='features-heading' className='relative h-full'>
        <div className='aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:pr-4 xl:pr-16 lg:h-full lg:rounded-l-2xl'>
          <img
            src={projectInfo().imageSrc}
            alt={projectInfo().title}
            className={`h-full w-full object-cover lg:h-full lg:w-full ${
              projectInfo().imagePositionClass || 'object-center'
            }`}
          />
        </div>

        <div className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='lg:col-start-2'>
            {/* <h2 id='features-heading' className='font-medium text-gray-500'>
              Leatherbound Daily Journal
            </h2> */}
            <h2 className='mt-4 text-4xl font-extrabold text-gray-900 tracking-tight'>
              {projectInfo().title}
            </h2>
            <p className='mt-4 text-gray-500'>
              We've obsessed over every detail of this handcrafted journal to bring you the best
              materials for daily use.
            </p>

            <dl className='mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2'>
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className='font-medium text-gray-900'>{feature.name}</dt>
                  <dd className='mt-2 text-gray-500'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
