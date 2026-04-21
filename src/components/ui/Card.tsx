interface Props {
  children: React.ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div className="border-2 border-black p-4 md:p-8">
      {children}
    </div>
  )
}

export default Card