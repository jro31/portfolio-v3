import { CheckIcon } from '@heroicons/react/outline';

import { fullStackApplication, hosting, website } from './Pricing';

const PricingCard = props => {
  const pricingCardInfo = () => {
    switch (props.pricingCard) {
      case website:
        return {
          title: 'Website',
          price: 299,
          description:
            'I will build you a custom client-side web application with Next.js, ideal for a personal site, blog, or small business web presence. Available features include:',
          features: [
            'Splash page',
            'Information pages',
            'Contact form',
            'CTA section',
            'Dynamic sitemap',
          ],
          exampleProjects: [
            {
              name: "Jethro's Bistro",
              href: 'https://jethrosbistro.com/',
            },
            {
              name: 'jethro.codes',
              href: 'https://jethro.codes/',
            },
          ],
        };
      case fullStackApplication:
        return {
          title: 'Full-stack application',
          price: 899,
          description:
            'I will build you a full-stack application consisting of a Next.js frontend and a Ruby on Rails API. Available features include:',
          features: [
            'Everything in website package',
            'PostgreSQL database',
            'User sign-up/login',
            'Image hosting',
            'User input forms',
            'Database search',
          ],
          exampleProjects: [
            {
              name: 'Meals of Change',
              href: 'https://mealsofchange.com/',
            },
          ],
        };
      case hosting:
        return {
          title: 'Hosting',
          price: 49,
          frequency: '/month',
          description:
            'I will take care of hosting your website or full-stack application. Available features include:',
          features: [
            'Front-end hosting on Vercel or Netlify',
            'API hosting on Heroku',
            'Custom domain setup',
            'Google search console setup',
            'Site updates and deployment',
          ],
        };
      // TODO - Add a 'Free' consulation card
      // TODO - Add 'App maintenance' card
      default:
        throw new Error(`Unrecognised pricing card '${props.pricingCard}' passed to PricingCard`);
    }
  };

  return (
    <div className='snap-start scroll-ml-1/12-screen relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col min-w-full sm:min-w-[385px]'>
      <div className='flex-1'>
        <h3 className='text-xl font-semibold text-gray-900'>{pricingCardInfo().title}</h3>
        <div className='flex flex-col mt-4'>
          <p className='text-gray-400'>Starting at</p>
          <p className='flex items-baseline text-gray-900'>
            <span className='text-5xl font-extrabold tracking-tight'>
              £{pricingCardInfo().price}
            </span>
            {pricingCardInfo().frequency && (
              <span className='ml-1 text-xl font-semibold'>{pricingCardInfo().frequency}</span>
            )}
          </p>
        </div>
        <p className='mt-4 text-gray-500'>{pricingCardInfo().description}</p>

        {/* Feature list */}
        <ul role='list' className='mt-2 space-y-2'>
          {pricingCardInfo().features.map(feature => (
            <li key={`${pricingCardInfo().title}-pricing-card-${feature}-feature`} className='flex'>
              <CheckIcon className='flex-shrink-0 w-6 h-6 text-indigo-500' aria-hidden='true' />
              <span className='ml-3 text-gray-500'>{feature}</span>
            </li>
          ))}
        </ul>

        {pricingCardInfo().exampleProjects && pricingCardInfo().exampleProjects.length > 0 && (
          <div className='text-gray-500 mt-4'>
            Example apps:&#160;
            {pricingCardInfo().exampleProjects.map((project, index) => (
              <>
                {index > 0 && ', '}
                <a
                  key={`${project.name} link`}
                  href={project.href}
                  className='underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  {project.name}
                </a>
              </>
            ))}
          </div>
        )}
      </div>

      <a
        href='#' // TODO - Should link to contact section
        className='mt-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
      >
        Find out more
      </a>
    </div>
  );
};

export default PricingCard;
