import './App.css'
// import './assets/marissaQuotes'

function App() {
  function handleOnMouseOver(){

  }
  function handleDoubleClick(e){
    alert("double clicked");
    // e.stopPropagation()
  }
  function handleClick(e){
    e.preventDefault()
    console.log("clicked");
  }
  function focusHandler(e){
    e.preventDefault()
    console.log("inside the text box..")
  }
  function blurHandler(e){
    console.log("exited the text box..")
  }
  
  function copyHandler(){
    alert("something copied")
  }
  function pasteHandler(){
    alert("something pasted")
  }
  function cutHandler(){
    alert("something cutt")
  }
  function keyDownHandler(e){
    e.preventDefault()// to avoid refressing on pressing the enter key
    console.log(e)
    if(e.key === 'Enter'){
      console.log('enter is pressed')
    }
    // alert("something cutt")
  }
  return (
    <>
      <div>
        <img onMouseOver={handleOnMouseOver} src="https://placehold.co/600x400.png" alt="" />
      </div>
      <div>
        <button onCopy={copyHandler} onClick={handleClick} onDoubleClick={handleDoubleClick}>click me!!</button>
      </div>
      <form action="">
        <input type="text" onKeyDown={keyDownHandler} onPaste={pasteHandler} onCut={cutHandler} onBlur={blurHandler} onFocus={focusHandler} />
      </form>
      <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem libero eum ex sint quo earum, laboriosam dolorum aperiam. Autem neque, impedit quaerat doloribus aliquid sint sapiente quia accusantium illo!</p>
    </>
  )
}

export default App
