import { Children } from 'react';
import './Video.css'
import PlayPauseButton from './playPauseButton.jsx';
function Video({ title = "unknown",id, isVerified=true,time = "0 sec", classVal = "", channel = "unkown channel", views = '0',children }) {

    let condUI;
    if(isVerified)
        condUI=<div className='channel'>{channel} ✅</div>
    else 
        condUI = <div className='channel'>{channel}</div>
    return (
        <>
            <div className="container">
                <div className='pic'>
                    <img src={`https://loremflickr.com/300/200/${id}`} alt="img" />
                </div>
                <div className='title'style={{color:'white'}}>{title}</div>

                {/* <div className='channel'>{channel} {(isVerified)?'✅':null}</div> */}

                {/* {condUI} */}
                
                <div className='channel'>{channel} {isVerified && '✅'}</div>
                <div className='views'>{views} views <span>.</span> {time} </div>
                
                {children}
            </div>
        </>
    )
}

export default Video