
const Balance = ({amount}) => {
  return (
    <div className="p-4 flex text-lg">
      <div className="mr-4 font-bold ">Your balance</div>
      <div className="font-semibold text-zinc-800">Rs {amount}</div>
    </div>
  )
}

export default Balance
