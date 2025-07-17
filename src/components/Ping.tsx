function Ping({ active = false }: { active?: boolean }) {
  return (
    <div className="relative mx-auto flex size-5 items-center justify-center">
      {active && (
        <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_cubic-bezier(0,_0,_0.2,_1)_infinite] rounded-full bg-neutral-100 opacity-75 duration-100"></span>
      )}
      <span className="relative inline-flex size-2 rounded-full bg-neutral-200"></span>
    </div>
  );
}
export default Ping;
