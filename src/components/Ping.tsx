import { cn } from "../lib/utils";

function Ping({
  active = false,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex size-5 items-center justify-center",
        className,
      )}
    >
      {active && (
        <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_cubic-bezier(0,_0,_0.2,_1)_infinite] rounded-full bg-neutral-100 opacity-75 duration-100"></span>
      )}
      <span
        className={cn(
          "relative inline-flex size-1 rounded-full bg-neutral-200",
          { "size-2": active },
        )}
      ></span>
    </div>
  );
}
export default Ping;
