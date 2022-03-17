const ProjectCard = props => {
  return (
    <div className='snap-start h-full bg-green-500 scroll-ml-1/12-screen mr-4 xs:mr-6 md:mr-8 lg:mr-10 min-w-full rounded-2xl min-h-[80vh] lg:min-h-0'>
      {props.project}
    </div>
  );
};

export default ProjectCard;
