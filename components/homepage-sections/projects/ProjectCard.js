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
            'An indistinct game where players must neatly fit falling blocks into lines at ever-increasing speeds, by moving and rotating them.',
          features: [
            {
              title: 'React',
              description:
                'Built with React and hosted on Firebase, the game can be played straight in your browser.',
            },
            {
              title: 'Redux Toolkit',
              description:
                'This app does not use images. Instead, the gameboard is stored as state in Redux Toolkit, and the CSS is updated based changes made to this state automatically or by the user.',
            },
            {
              title: 'Mobile friendly',
              description:
                'This app was designed with mobile in mind, so no keyboard, no problem. You can play with just your phone, from wherever you please.',
            },
            {
              title: 'Local storage',
              description:
                "To avoid the use of cookies, the app stores your score in your browser's local storage, meaning that when you come back to play again, your top score remains.",
            },
          ],
          siteUrl: 'https://blocksfalling.com/',
          githubUrl: 'https://github.com/jro31/blocks-falling',
          anatomyUrl: 'https://jethro.codes/projects/blocks-falling',
          imageSrc: 'images/blocks-falling-screenshot.png',
        };
      case jethrosBistro:
        return {
          title: "Jethro's Bistro",
          description:
            'A template restaurant application built with Next.js and hosted on Vercel. Includes menus, testimonials, an about page and a contact form.',
          features: [
            {
              title: 'Fast navigation',
              description:
                'Use of getStaticProps means that pages are pre-rendered at build time, leading to faster navigation within the app.',
            },
            {
              title: 'Dynamic pages',
              description:
                'Pages are generated dynamically based on the available data, meaning that new pages can be quickly and simply added.',
            },
            {
              title: 'Dynamic sitemap',
              description:
                'The sitemap is generated dynamically, so Google always knows when you add a new page',
            },
            {
              title: 'Mobile compatible',
              description: 'All pages reformat to render beautifully on mobile devices.',
            },
          ],
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
          features: [
            {
              title: 'Ideal blogging platform',
              description:
                "Built so that adding a new Markdown file, the app's homepage, the relevant section page, and the sitemap all update automatically, this app is perfect for anyone who wants to focus just on creating content.",
            },
            {
              title: 'Tailwind styling',
              description:
                "Barring some minor customisation, the app utilises Tailwind's typography plugin to beautifully render Markdown articles.",
            },
            {
              title: 'Syntax highlighting',
              description:
                'Want to write about your code? This app uses Remark with the remark-prism plugin, so the code blocks in your Markdown articles are beautifully styled and easily readable.',
            },
            {
              title: 'Email feedback',
              description:
                'The contact form uses the SendGrid API so that any user feedback is delivered straight to your inbox.',
            },
          ],
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
          features: [
            {
              title: 'Search engine friendly',
              description:
                'Hosted on Vercel, the front-end utilises the standout features of Next.js including getStaticPaths and getStaticProps, which fetches data from the API and pre-renders it at build time, making it available to search engine crawlers.',
            },
            {
              title: 'Ruby on Rails API',
              description:
                "Hosted on Heroku, the separated backend handles all the application's data. This separation of concerns allows flexibility, as new front-ends (for example, an iOS app) could be added seemlessly, without needing to update the existing code.",
            },
            {
              title: 'S3 image hosting',
              description:
                "User-uploaded photos are hosted on Amazon's S3 service. Photos are uploaded to and fetched from S3 by the front-end (only the metadata is sent too/from the API) meaning faster uploads and photo rendering.",
            },
          ],
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
            'A personal project to allow me to "check-in" from my current location, as a way of allowing people to find where in the world I am when I travel.',
          features: [
            {
              title: 'React front-end',
              description:
                'The front-end is built with pure React and hosted on Netlify. It includes a sign-in form and "check-in" form, where it utilises my phone\'s GPS to save my current location in a database.',
            },
            {
              title: 'Mapbox API',
              description:
                'The locations are fetched from the database, and using the Mapbox API via the react-map-gl package, they are plotted to a map, allowing site visitors to see exactly where I am and have been.',
            },
            {
              title: 'Ruby on Rails API',
              description:
                'My login data and "check-ins" are stored in a separate Rails API that\'s hosted on Heroku.',
            },
            {
              title: 'Cloudinary image hosting',
              description: 'Uploaded images and hosted on Cloudinary.',
            },
          ],
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
            <h2 className='mt-4 text-4xl font-extrabold text-gray-900 tracking-tight'>
              {projectInfo().title}
            </h2>
            <p className='mt-4 text-gray-500'>{projectInfo().description}</p>

            {projectInfo().features && (
              <dl className='mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2'>
                {projectInfo().features.map(feature => (
                  <div key={`${projectInfo().title}-${feature.title}-feature`}>
                    <dt className='font-medium text-gray-900'>{feature.title}</dt>
                    <dd className='mt-2 text-gray-500'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
