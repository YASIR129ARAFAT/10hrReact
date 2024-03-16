import './Video.css'
function Video({ title = "unknown", time = "0 sec", classVal = "", channel = "unkown channel", views = '0' }) {
    // console.log(props);
    return (
        <>
            <div className="container">
                <div className='pic'>
                    <img src='https://loremflickr.com/300/200/{id}' alt="img" />
                </div>
                <div className='title'style={{color:'white'}}>{title}</div>
                <div className='channel'>{channel}</div>
                <div className='views'>{views} views <span>.</span> {time} </div>
            </div>
        </>
    )
}

export default Video