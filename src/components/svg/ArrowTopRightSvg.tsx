import type { SVGProps } from "react";

function ArrowTopRightSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      stroke="inherit"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="inherit"
      {...props}
    >
      <title id="arrowRightTopIconTitle">Arrow Right Top</title>
      <path d="M19 13V5h-8" /> <path strokeLinecap="round" d="M19 5l-1 1" />
      <path d="M18 6L5 19" />
    </svg>
  );
}
export default ArrowTopRightSvg;
