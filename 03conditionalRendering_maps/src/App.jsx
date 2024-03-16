import "./App.css";
import Video from "./components/Video";
import {propertyObj} from './data/vidCompData'
function App() {
   //we can pass this obj in Video component to set the values of props
  return (
    <div className="App">
      {propertyObj.map((val)=>{
        return <Video key={val.id} {...val}></Video>
      })}
    </div>
  );
}

export default App;
