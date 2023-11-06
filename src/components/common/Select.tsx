const Select = ({onChange = (e: any) => {}, values}  : any) => {
    return (
    <select onChange={e => onChange(e)}>
    {values.map((v: any) => <option value={v}>{v}</option>)}
</select>)
}

export default Select;