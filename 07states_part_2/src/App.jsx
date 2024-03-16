import "./App.css";
import Video from "./components/Video.jsx";
import Button from "./components/Button.jsx";
import PlayPauseButton from "./components/playPauseButton.jsx";
import { propertyObj } from "./data/vidCompData.js";
import { useState } from "react";

function App() {
  //we can pass this obj in Video component to set the values of props
  const [videosToRender,setVideosToRender] = useState(propertyObj);
  return (
    <div className="App" onClick={()=>console.log("app clicked")}>
      <div>07 states</div>
      <button onClick={(e)=>{
        e.stopPropagation()
        const obj = {
          id:videosToRender.length+1,
          title: "mongo tutorial",
          time: "10 yr",
          channel: "tutorial hell",
          views: "9091k",
          isVerified: true,
        }

        setVideosToRender((vid)=>{
          return [...vid,obj]
        })
        
      }}>Add videos</button>
      {videosToRender.map((val) => {
        return (
          <>
            <Video key={val.id} {...val}>
              <PlayPauseButton
                onPause={() => {
                  alert(`paused + ${val.title}`);
                }}
                onPlay={() => {
                  alert(`playing + ${val.title}`);
                }}
              ></PlayPauseButton>
            </Video>
          </>
        );
      })}

      <div style={{ clear: "both" }}>
        <Button onClick={() => alert("Next page..")}>
          <div>Next Page</div>
        </Button>
        <Button onClick={() => alert("Prev page...")}>
          <div>Prev Page</div>
        </Button>
      </div>
    </div>
  );
}

export default App;
