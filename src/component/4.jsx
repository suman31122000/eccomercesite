
import {useState} from 'react';
import Box from './1';
function App(){
  var today=new Date();
  const [input,setinput]=useState("");
  const [value,setvalue]=useState([]);
  function inputchange(e){
    setinput(e.target.value);
  }
  function update(e){
    e.preventDefault();
    setvalue([...value,input]);
    setinput("");
  }
  return(
<div className='content-centre'>
  <p className="  p-5 m-9">TO DO APP</p>
  <form onSubmit={update}>
  <input onChange={inputchange} placeholder="add task" value={input}></input>
  <button type='submit' >Add</button>
  </form>
  <div className='task' >
    <ul>
    {value.map((value,index)=>{return <li key={index}>{value} {today.toLocaleTimeString()}</li>})}
    </ul>
  </div>
 
</div>
  )
}
export default App;