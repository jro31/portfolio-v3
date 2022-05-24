import { fullStackApplication, hosting, website } from './Pricing';

const PricingCard = props => {
  const pricingCardInfo = () => {
    switch (props.pricingCard) {
      case website:
        return {
          title: 'Website',
          price: 299,
          description: 'This is the description',
          features: ['A feature', 'Another feature'],
          // TODO - Include links to examples
        };
      case fullStackApplication:
        return {
          title: 'Full-stack application',
          price: 899,
          description: 'This is the description',
          features: ['A feature', 'Another feature'],
        };
      case hosting:
        return {
          title: 'Hosting',
          price: 49,
          frequency: '/month',
          description: 'This is the description',
          features: ['A feature', 'Another feature'],
        };
      default:
        throw new Error(`Unrecognised pricing card '${props.pricingCard}' passed to PricingCard`);
    }
  };

  return (
    <div className='snap-start scroll-ml-1/12-screen relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col min-w-full sm:min-w-[385px]'>
      <div className='flex-1'>
        <h3 className='text-xl font-semibold text-gray-900'>{pricingCardInfo().title}</h3>
        <p className='mt-4 flex items-baseline text-gray-900'>
          <span className='text-5xl font-extrabold tracking-tight'>${pricingCardInfo().price}</span>
          {pricingCardInfo().frequency && (
            <span className='ml-1 text-xl font-semibold'>{pricingCardInfo().frequency}</span>
          )}
        </p>
        <p className='mt-6 text-gray-500'>{pricingCardInfo().description}</p>

        {/* Feature list */}
        <ul role='list' className='mt-6 space-y-6'>
          {pricingCardInfo().features.map(feature => (
            <li key={`${pricingCardInfo().title}-pricing-card-${feature}-feature`} className='flex'>
              {/* <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" /> */}
              <span className='ml-3 text-gray-500'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href='#' // TODO - Should link to contact section
        className='mt-8 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
      >
        Find out more
      </a>
    </div>
  );
};

export default PricingCard;
