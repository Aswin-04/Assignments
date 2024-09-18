
const InputBox = ({label, placeholder, onChange}) => {
  return (
    <div>
      <div className="py-2 font-medium">{label}</div>
      <input onChange={onChange} className="px-2 py-1 w-full border rounded border-slate-200" type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputBox
