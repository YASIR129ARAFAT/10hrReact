import PlayPauseButton from "./PlayPauseButton.jsx";
import Video from "./Video.jsx";

function VideoList({ videosToRender,updateVideo,dispatch}) {
  return (
    <>
      {videosToRender.map((val) => {
        return (
          <Video key={val.id} {...val} updateVideo={updateVideo} dispatch={dispatch}>
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
