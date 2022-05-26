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
          links: {
            siteUrl: 'https://blocksfalling.com/',
            anatomyUrl: 'https://jethro.codes/projects/blocks-falling',
            githubUrl: 'https://github.com/jro31/blocks-falling',
          },
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
          links: {
            siteUrl: 'https://jethrosbistro.com/',
          },
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
          links: {
            siteUrl: 'https://jethro.codes/',
            anatomyUrl: 'https://jethro.codes/projects/jethro-codes',
            githubUrl: 'https://github.com/jro31/jethro-codes',
          },
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
          links: {
            siteUrl: 'https://mealsofchange.com/',
            anatomyUrl: 'https://jethro.codes/projects/meals-of-change',
            githubUrl: 'https://github.com/jro31/meals-of-change-front-end',
          },
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
          links: {
            siteUrl: 'https://wheresjethro.com/',
            githubUrl: 'https://github.com/jro31/wheres-jethro-front-end',
          },
          imageSrc: 'images/wheres-jethro-screenshot.png',
          imagePositionClass: 'object-left',
        };
      default:
        throw new Error(`Unrecognised project '${props.project}' passed to ProjectCard`);
    }
  };

  const buttonText = linkKey => {
    switch (linkKey) {
      case 'siteUrl':
        return 'Visit site';
      case 'githubUrl':
        return 'View on GitHub';
      case 'anatomyUrl':
        return 'Anatomy of a project';
      default:
        throw new Error(
          `Unrecognised linkKey '${linkKey}' passed to project card buttonText() function`
        );
    }
  };

  const buttonColorClasses = linkKey => {
    switch (linkKey) {
      case 'siteUrl':
        return 'text-white bg-indigo-600 hover:bg-indigo-700';
      case 'githubUrl':
        return 'text-gray-700 bg-white hover:bg-gray-50';
      case 'anatomyUrl':
        return 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100';
      default:
        throw new Error(
          `Unrecognised linkKey '${linkKey}' passed to project card buttonColorClasses() function`
        );
    }
  };

  const conditionalButtonClasses = linkKey => {
    if (Object.keys(projectInfo().links).length === 1) {
      return 'rounded-md';
    } else if (linkKey === Object.keys(projectInfo().links)[0]) {
      return 'rounded-tl-md rounded-tr-md 2xs:rounded-tr-none 2xs:rounded-bl-md';
    } else if (linkKey === Object.keys(projectInfo().links).slice(-1)[0]) {
      return 'rounded-bl-md rounded-br-md 2xs:rounded-bl-none 2xs:rounded-tr-md 2xs:-ml-px';
    } else {
      return '2xs:-ml-px';
    }
  };

  return (
    <div className='snap-start bg-white scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl'>
      <section aria-labelledby='features-heading' className='relative h-full'>
        <div className='aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:pr-4 xl:pr-16 lg:h-full lg:rounded-l-2xl'>
          {/* FIXME - Image is not 'rounded' on mobile */}
          <img
            src={projectInfo().imageSrc}
            alt={projectInfo().title}
            className={`h-full w-full object-cover lg:h-full lg:w-full ${
              projectInfo().imagePositionClass || 'object-center'
            }`}
          />
        </div>

        <div className='max-w-2xl mx-auto pt-4 pb-24 px-4 sm:pb-32 lg:pb-8 sm:px-6 lg:max-w-7xl lg:pt-8 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:h-full lg:overflow-y-auto'>
          <div className='lg:col-start-2 flex flex-col justify-between'>
            <div>
              <h2 className='mt-4 text-2xl 2xs:text-4xl font-extrabold text-gray-900 tracking-tight'>
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
            {projectInfo().links && Object.keys(projectInfo().links).length > 0 && (
              <div className='flex flex-col 2xs:flex-row 2xs:inline-flex relative z-0 rounded-md mt-6'>
                {Object.keys(projectInfo().links).map(linkKey => (
                  <a
                    key={`${projectInfo().title}-${linkKey}-link`}
                    href={projectInfo().links[linkKey]}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button
                      type='button'
                      className={`relative inline-flex justify-center 2xs:justify-start items-center shadow-sm px-4 lg:px-3 xl:px-6 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full 2xs:w-auto ${conditionalButtonClasses(
                        linkKey
                      )} ${buttonColorClasses(linkKey)}`}
                    >
                      {buttonText(linkKey)}
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
