import "./App.css";
import Video from "./components/Video.jsx";
import PlayPauseButton from "./components/PlayPauseButton.jsx";
import AddVideoForm from "./components/AddVideoForm.jsx";
import { propertyObj } from "./data/vidCompData.js";
import { useState } from "react";
import VideoList from "./components/VideoList.jsx";

function App() {
  //we can pass this obj in Video component to set the values of props
  const [videosToRender, setVideosToRender] = useState(propertyObj);
  const [vidToEdit, setVidToEdit] = useState(null);
  function addVidForm(vidFromForm) {
    setVideosToRender([
      ...videosToRender,
      { ...vidFromForm, id: videosToRender.length + 1 },
    ]);
  }
  function deleteVideo(id){
    const new_arr = videosToRender;
    setVideosToRender(new_arr.filter((ele)=>{
      return ele.id!=id;
    }))
  }
  function updateVideo(id){
    const vid = videosToRender.find((ele)=>{
      return ele.id===id
    })

    setVidToEdit(vid);

  }
  function editHandler(video){
    
    const newArr = videosToRender;
    const vidIndx = newArr.findIndex((ele)=>ele.id===video.id);

    newArr.splice(vidIndx,1,video);
    setVideosToRender(newArr);
    setVidToEdit(null)
  }
  return (
    <div className="App" onClick={() => console.log("app clicked")}>

      <div>08 and 09 forms, state uplifting, CRUD and useEffect hook</div>
      <div>
        <AddVideoForm editHandler={editHandler} vidToEdit={vidToEdit} addVidForm={addVidForm}></AddVideoForm>
      </div>

      <div>
        <VideoList deleteVideo={deleteVideo} updateVideo={updateVideo} videosToRender={videosToRender}></VideoList>
      </div>

    </div>
  );
}

export default App;
