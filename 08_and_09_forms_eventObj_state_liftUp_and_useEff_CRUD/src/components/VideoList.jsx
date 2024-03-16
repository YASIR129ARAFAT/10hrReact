import PlayPauseButton from "./PlayPauseButton.jsx";
import Video from "./Video.jsx";

function VideoList({ videosToRender,deleteVideo,updateVideo}) {
  return (
    <>
      {videosToRender.map((val) => {
        return (
          <Video key={val.id} {...val} deleteVideo={deleteVideo} updateVideo={updateVideo}>
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
