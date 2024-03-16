import "./App.css";
import Video from "./components/Video";
function App() {
  const obj = {
    title: "Typescript tutorial",
    time: "1 mon",
    channel: "tutorial hell",
    views: "9k",
  }; //we can pass this obj in Video component to set the values of props
  return (
    <div className="App">
      <Video
        title="React Js tutorial"
        time="1 year"
        channel="tutorial hell"
        views="9k"
      ></Video>
      <Video
        title="Mongo DB tutorial"
        time="1 week"
        channel="tutorial hell"
        views="100k"
      ></Video>
      <Video {...obj}></Video>
    </div>
  );
}

export default App;
