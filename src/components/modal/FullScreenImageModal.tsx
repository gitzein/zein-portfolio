import Modal from "./Modal";

type PropsType = {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
};

function FullScreenImageModal({
  src,
  alt = "image",
  isOpen,
  onClose,
}: PropsType) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative h-[90vh] w-[90vw] overflow-hidden bg-yellow-700/50 dark:bg-violet-500/50">
        <img
          src={src}
          alt={alt}
          className="mx-auto h-full w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
}
export default FullScreenImageModal;
