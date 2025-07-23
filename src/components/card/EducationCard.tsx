import UMSvg from "../svg/UMSvg";

function EducationCard() {
  return (
    <div className="dark:divide-2 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-amber-900/40 bg-gradient-to-b from-yellow-700/40 to-yellow-700/20 p-4 dark:border-none dark:bg-none">
      <div className="[&_svg]:size-26 [&_svg]:fill-neutral-100 lg:[&_svg]:size-30">
        <UMSvg />
      </div>
      <div className="space-y-2 text-center font-semibold">
        <p className="text-sm">State University of Malang</p>
        <p className="text-xs">2018 - 2022</p>
        <p className="text-xl">Associate Degree in Electrical Engineering</p>
        <p className="text-xs">GPA: 3.06</p>
      </div>
    </div>
  );
}
export default EducationCard;
