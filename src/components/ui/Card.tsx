interface Props {
  children: React.ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div className="border-2 border-black p-8 mt-10">
      {children}
    </div>
  )
}

export default Card