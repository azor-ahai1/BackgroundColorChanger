import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#002424")
  const colorChanger = (newcolor) =>{
    setColor(newcolor)
    // document.body.style.background=newcolor;
  }
  const handleInputChange = (e) => {
    if(e.target.value.length==0){

    }
    else if(e.target.value[0]=='#' && e.target.value.length==7){
      setColor(e.target.value);
      // colorChanger(e.target.value);
    }
    else if((e.target.value.length>0 && e.target.value[0]!='#') || e.target.value.length>7){
      alert("Write only Hexadecimal Code")
      // e.target.value="";
    }
    else {
      if(e.target.value.length==1 && e.target.value[0]=='#'){
        // e.target.value="#";
      }
      else if(!(() => {
        return /[ABCDEFabcdef]$/.test(e.target.value);
      })() && !(() => {
        return /\d$/.test(e.target.value);
      })()){
        alert("Write only Hexadecimal Code")
      }
    }
    
  };
  return (
    <div className="fixed w-full h-screen" style={{backgroundColor: color}} >
      <div className='fixed flex flex-col items-center justify-center inset-x-0'>
        <h2 className='bg-black text-5xl px-3 py-4 text-white w-full text-center'><strong>Background Color Changer</strong></h2>
        <h2 className='bg-white my-2 text-2xl text-black p-2 rounded-2xl'><strong>Current Background Color is: {color}</strong></h2>
        <div className='my-1 text-xl text-black p-2' style={{background:'#AEAEAE', color:'#3B3B3B'}}>
          <h3><strong>Enter Your Custom Color:</strong></h3>
          <form className='flex-col items-center justify-center'>
            <input type="text" placeholder='  Your Color' onChange={handleInputChange} style={{background:'#AEAEAE', color:'#3B3B3B'}} className='border-2 border-black m-2 rounded'/>
            {/* <button className="m-1 w-24 h-10 flex  bg-white text-black" onClick={()=>colorChanger('white')}><h6>Submit</h6></button> */}
          </form>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center items-center border border-r-purple-50 px-4 py-2 rounded-3xl">
          <button className="m-1 w-24 h-10 bg-white text-black" onClick={()=>colorChanger('#FFFFFF')}><h6>WHITE</h6></button>
          <button className="m-1 w-24 h-10 bg-red-900 text-white" onClick={()=>colorChanger('#654321')}><h6>BROWN</h6></button>
          <button className="m-1 w-24 h-10 bg-red-400 text-white" onClick={()=>colorChanger('#FF0000')}><h6>RED</h6></button>
          <button className="m-1 w-24 h-10 bg-orange-400 text-white" onClick={()=>colorChanger('#FF4500')}><h6>ORANGE</h6></button>
          <button className="m-1 w-24 h-10 bg-yellow-400 text-white" onClick={()=>colorChanger('#FFFF00')}><h6>YELLOW</h6></button>
          <button className="m-1 w-24 h-10 bg-purple-400 text-white" onClick={()=>colorChanger('#800080')}><h6>PURPLE</h6></button>
          <button className="m-1 w-24 h-10 bg-green-400 text-white" onClick={()=>colorChanger('#00FF00')}><h6>GREEN</h6></button>
          <button className="m-1 w-24 h-10 bg-blue-400 text-white" onClick={()=>colorChanger('#0000FF')}><h6>BLUE</h6></button>
          <button className="m-1 w-24 h-10 bg-black text-white" onClick={()=>colorChanger('#000000')}><h6>BLACK</h6></button>
        </div>
      </div>
    </div>
  )
}

export default App
