function SkyGradient() {
  return (
    <>
      <div className="absolute bottom-0 left-[50%] z-0 h-full w-[200vw] -translate-x-[50%] bg-radial-[at_50%_100%] from-orange-50/80 via-orange-100/70 via-[1%] to-60% dark:from-violet-200/50 dark:via-violet-400/30 dark:via-5%" />
      <div className="absolute bottom-0 left-[50%] z-0 h-1/2 w-[150vw] -translate-x-[50%] bg-radial-[at_50%_100%] from-orange-100/80 via-orange-200/30 via-[3%] to-60% dark:from-violet-100/50 dark:via-violet-500/30 dark:via-10%" />
    </>
  );
}
export default SkyGradient;
