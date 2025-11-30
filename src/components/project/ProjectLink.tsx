import ArrowTopRightSvg from "../svg/ArrowTopRightSvg";

type PropsType = {
  link: string;
};

function ProjectLink({ link }: PropsType) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative inline-block w-fit rounded-4xl border-2 border-yellow-400/50 transition-colors duration-300 hover:bg-yellow-300/50 max-lg:mx-auto dark:border-violet-500/60 dark:hover:bg-violet-400/50 [&_svg]:size-4 [&_svg]:stroke-neutral-100"
    >
      <div className="absolute -top-2 -right-2 size-7 rounded-full bg-radial from-yellow-100 to-60% dark:from-violet-300"></div>
      <div className="flex h-full w-full items-center gap-1 px-4 py-2">
        Demo
        <ArrowTopRightSvg />
      </div>
    </a>
  );
}
export default ProjectLink;
