import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

function Modal({ children, isOpen, onClose, className }: PropsType) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-xs" onClick={onClose}>
      <div
        className={cn(
          "fixed top-[50%] left-[50%] z-50 grid max-h-screen max-w-full translate-x-[-50%] translate-y-[-50%] overflow-hidden",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 size-7 rounded-bl-md bg-yellow-900 font-bold dark:bg-violet-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
export default Modal;
