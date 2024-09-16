
const InputBox = ({label, placeholder}) => {
  return (
    <div>
      <div className="py-2 font-medium">{label}</div>
      <input className="px-2 py-1 w-full border rounded border-slate-200" type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputBox
