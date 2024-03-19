const RollField = ({field, name, placeholder}) => {
    return (
        <div className='field'>
            {field}
            <input className='input' type='text' name={name} placeholder={placeholder}/>
        </div>
    );
};
export default RollField;