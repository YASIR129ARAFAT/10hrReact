import "./App.css";

import AddVideoForm from "./components/AddVideoForm.jsx";
import { propertyObj } from "./data/vidCompData.js";
import { useState, useReducer } from "react";
import VideoList from "./components/VideoList.jsx";

function App() {
  const [vidToEdit, setVidToEdit] = useState(null);
  const [videosToRender, dispatch] = useReducer(
    videosToRenderReducer,
    propertyObj
  );
  function videosToRenderReducer(videosToRender, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...videosToRender,
          { ...action.payload, id: videosToRender.length + 2 },
        ];
      case "EDIT":
        const newArr = videosToRender;
        const vidIndx = newArr.findIndex((ele) => ele.id === action.payload.id);

        newArr.splice(vidIndx, 1, action.payload);
        setVidToEdit(null);
        return newArr;

      case "DELETE":
        return videosToRender.filter((ele) => {
          return ele.id != action.payload;
        });
      default:
        return videosToRender;
    }
  }
  

  function updateVideo(id) {
    const vid = videosToRender.find((ele) => {
      return ele.id === id;
    });

    setVidToEdit(vid);
  }

  return (
    <div className="App" onClick={() => console.log("app clicked")}>
      <div>10 use reducer</div>
      <div>
        <AddVideoForm vidToEdit={vidToEdit} dispatch={dispatch}></AddVideoForm>
      </div>

      <div>
        <VideoList
          updateVideo={updateVideo}
          dispatch={dispatch}
          videosToRender={videosToRender}
        ></VideoList>
      </div>
    </div>
  );
}

export default App;
