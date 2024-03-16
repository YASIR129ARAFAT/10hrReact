import "./App.css";
import Video from "./components/Video.jsx";
import Button from "./components/Button.jsx";
import PlayPauseButton from "./components/playPauseButton.jsx";
import { propertyObj } from "./data/vidCompData";

function App() {
  //we can pass this obj in Video component to set the values of props
  return (
    <div className="App" onClick={()=>console.log("app clicked")}>
      <div>React - Events, EventHandler and SyntheticEventObj</div>
      {propertyObj.map((val) => {
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
