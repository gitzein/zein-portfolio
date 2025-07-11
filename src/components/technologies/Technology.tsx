import { type ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  name?: string;
};

function Technology({ children, name }: PropsType) {
  return (
    <div className="technology-container">
      {children}
      {name && <p>{name}</p>}
    </div>
  );
}
export default Technology;
