import './PlayPauseButton.css'
function PlayPauseButton({onPlay,onPause}){
    let isPlaying=true;
    function clickHandler(e){
        console.log(e);
        e.stopPropagation()
        if(isPlaying){
            onPause();
        }
        else{
            onPlay();
        }
        isPlaying=!isPlaying;
    }
    return(
        <>
            <button onClick={clickHandler}>{(isPlaying)?"play":'paused'}</button>
        </>
    )
}


export default PlayPauseButton;