import './Button.css'
function PlayButton({children,onClick}){
    function handleClick(){
        onClick();
    }
    return(
        <button onClick={handleClick}>{children}</button>   
    )
}

export default PlayButton