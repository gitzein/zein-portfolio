type PropsType = {
  title: string;
  src: string;
};

function ProjectImg({ src, title }: PropsType) {
  return (
    <div className="h-44 w-66">
      <img src={src} alt={title} className="h-full w-full object-contain" />
    </div>
  );
}
export default ProjectImg;
