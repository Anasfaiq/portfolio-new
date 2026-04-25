interface Props {
  children: React.ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div className="relative border-2 border-black p-4 md:p-8 shadow-[6px_6px_0_#1A1A1A]">
      {children}
    </div>
  )
}

export default Card