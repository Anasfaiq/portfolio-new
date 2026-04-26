interface Props {
  children: React.ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div
      className="relative border-2 border-(--color-border) p-4 md:p-8
      shadow-[6px_6px_0_var(--color-shadow)]
      bg-surface
      transition-colors duration-200"
    >
      {children}
    </div>
  );
};

export default Card;
