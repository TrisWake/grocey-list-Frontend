function Button({buttonName, clickFunc, cssid}){
    return(
        <div>
            <button onClick={clickFunc} id={cssid}>
                {buttonName}
            </button>
        </div>
    )
}

export default Button