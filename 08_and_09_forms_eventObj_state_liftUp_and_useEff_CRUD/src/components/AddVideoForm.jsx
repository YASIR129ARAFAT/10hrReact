import { useEffect, useState } from "react";
const initialState={
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
}
function AddVideoForm({ addVidForm,vidToEdit,editHandler }) {
  const [newVid, setNewVid] = useState(initialState);
  
  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if(vidToEdit!=null){
      editHandler(newVid)
    }
    else{
      addVidForm(newVid);
    }
    setNewVid(initialState);
  }
  function onChange(e) {
    const obj = { ...newVid, [e.target.name]: e.target.value };
    setNewVid(obj);
    // console.log(obj)
  }

  useEffect(()=>{
    
    if(vidToEdit){
      setNewVid(vidToEdit)
    }
  },[vidToEdit])

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newVid.title}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="views"
        placeholder="views"
        value={newVid.views}
        onChange={onChange}
      />
      <br />
      <button onClick={onSubmit}>{vidToEdit?"Update":"Add"} Video</button>
    </form>
  );
}

export default AddVideoForm;
