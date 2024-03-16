import { useCallback } from "react";
import PlayPauseButton from "./PlayPauseButton.jsx";
import Video from "./Video.jsx";
import { useContext } from "react";
import VideosToRenderContext from "../context/videosToRenderContext.jsx";

function VideoList({ updateVideo }) {
  const videosToRender = useContext(VideosToRenderContext);

  return (
    <>
      {videosToRender.map((val) => {
        return (
          <Video key={val.id} {...val} updateVideo={updateVideo}>
            <PlayPauseButton
              onPause={() => {
                alert(`paused + ${val.title}`);
              }}
              onPlay={() => {
                alert(`playing + ${val.title}`);
              }}
            ></PlayPauseButton>
          </Video>
        );
      })}
    </>
  );
}

export default VideoList;
