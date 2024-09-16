import { Link } from "react-router-dom"


const BottomWarning = ({label, buttonText, to}) => {
  return (
    <div className="py-2 text-center font-medium">
      <span>{label}</span>
      <Link className="pl-2 underline" to={to}>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning
