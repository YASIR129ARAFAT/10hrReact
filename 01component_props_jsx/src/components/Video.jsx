import './Video.css'
function Video({title="unknown", classVal=""}){
    // console.log(props);
    return (
    <>
        <img src="https://loremflickr.com/300/200/1" alt="img" />
        <div className={classVal}>{title}</div>
    </>
    )
}

export default Video