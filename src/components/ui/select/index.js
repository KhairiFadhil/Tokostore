const Select = (props) => {
    const { label, name, defaultValue, disabled, options} = props
    return(
        <div className="w-full flex flex-col">
            <label htmlFor={name}>{label}</label>
            <select className="px-1 h-10 rounded transition-all focus:outline-none focus:border-orange-500 focus:border-[1px] w-full border-2" name={name} defaultValue={defaultValue} disabled={disabled} id={name}>
                {options.map((option) => (
                    <option key={options.value} value={options.value} className="w-full rounded">
                        {option.label}
                    </option>
                ))}
            </select>

        </div>
    )
}
export default Select