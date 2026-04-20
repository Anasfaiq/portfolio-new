interface Props {
  children: React.ReactNode;
}
const WorkCard = ({ children }: Props) => {
  return (
    <div className="border-2 border-black">
      {children}
    </div>
  )
}

export default WorkCard