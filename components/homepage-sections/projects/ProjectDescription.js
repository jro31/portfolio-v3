const ProjectDescription = props => {
  return (
    <div className='text-sm 2xs:text-base sm:text-lg xl:text-xl xl:leading-7 2xl:leading-10'>
      {props.description}
      <br />
      {props.anatomyUrl && (
        <a
          href={props.anatomyUrl}
          target='_blank'
          rel='noreferrer'
          className='underline underline-offset-4'
        >
          Anatomy of a project
        </a>
      )}
    </div>
  );
};

export default ProjectDescription;
