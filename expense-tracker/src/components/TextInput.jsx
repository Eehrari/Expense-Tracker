export default function TextInput
({label, value, onChange, placeholder, type='text'}) {

    return (
        <div className="field">
            <label className="label">{label}</label>
            <input 
            type={type} 
            value={value}
            placeholder={placeholder}
            onChange={(e)=> onChange(e.target.value)}
            className="input" />
        </div>
    )

}