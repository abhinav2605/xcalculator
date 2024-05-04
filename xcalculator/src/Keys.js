import './App.css';

function Keys({value, handleClick}){
    return (
        <button className="key" onClick={handleClick}>
            {value}
        </button>
    )
}

export default Keys;