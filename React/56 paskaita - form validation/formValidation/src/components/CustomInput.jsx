const CustomInput = ({value, handleInputChange, input}) => {
    return (
        <>
        <div>
            <label htmlFor="">{input.label}</label>
            <input 
            value={value}
            onChange={(e) => handleInputChange(e)} 
            
            />
            <span>{input.error}</span>
        </div>
        </>
    )
}

export default CustomInput