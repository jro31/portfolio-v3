const ProjectDescription = props => {
  return (
    <div className='sm:text-lg lg:text-xl lg:leading-10'>
      {props.description}
      <br />
      <a
        href={props.anatomyUrl}
        target='_blank'
        rel='noreferrer'
        className='underline underline-offset-4'
      >
        Anatomy of a project
      </a>
    </div>
  );
};

export default ProjectDescription;
