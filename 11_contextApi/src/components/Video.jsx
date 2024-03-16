import { Children, useContext } from "react";
import "./Video.css";
import VideosToRenderDispatchContext from "../context/videosToRenderDispatchContext.jsx";
import PlayPauseButton from "./PlayPauseButton.jsx";

function Video({
  title = "unknown",
  id,
  isVerified = true,
  time = "0 sec",
  classVal = "",
  channel = "unkown channel",
  views = "0",
  children,
  updateVideo,
}) {
  const dispatch = useContext(VideosToRenderDispatchContext);

  let condUI;
  if (isVerified) condUI = <div className="channel">{channel} ✅</div>;
  else condUI = <div className="channel">{channel}</div>;
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://loremflickr.com/300/200/${id}`} alt="img" />
          <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
            X
          </button>
          <button onClick={() => updateVideo(id)}>Edit</button>
        </div>

        {/* <button onClick={deleteVideo}>X</button> */}
        <div className="title" style={{ color: "white" }}>
          {title}
        </div>

        {/* <div className='channel'>{channel} {(isVerified)?'✅':null}</div> */}

        {/* {condUI} */}

        <div className="channel">
          {channel} {isVerified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}{" "}
        </div>

        {children}
      </div>
    </>
  );
}

export default Video;
