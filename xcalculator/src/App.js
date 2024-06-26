import logo from "./logo.svg";
import "./App.css";
import Keys from "./Keys";
import {useState} from "react";

function App() {
  
  const [value, setValue] = useState("");
  const [display,setDisplay] = useState("");
  const [error, setError] = useState("");

  function handleClick(val){
    var operArr=[];
    var nums=[];
    if(val!=="=" && val!="C")
    setValue(value + val)
    else if(val=="C")
      setValue("")
    else
    {
      var len = value.length;
      var num="";
      for(let i=0;i<len;i++)
      {
        if(value[i]=="+"||value[i]=="-"||value[i]=="*"||value[i]=="/")
        {
          operArr.push(value[i]);
          nums.push(num);
          num="";
        }
        else
        {
          num = num + value[i];
          if(i==len-1)
            nums.push(num);
        }
      }
      if(operArr.length>=nums.length)
        setDisplay("Error")
      var flag=0;
      var result=0;
      while(operArr.indexOf("*")!=-1)
      {
          let flag = operArr.indexOf("*");
          result = parseInt(nums[flag])*parseInt(nums[flag+1]);
          operArr.splice(flag,1);
          nums.splice(flag,2,result);
      }
      while(operArr.indexOf("/")!=-1)
      {
          let flag = operArr.indexOf("/");
          if(parseInt(nums[flag+1])===0 && parseInt(nums[flag])===0)
            setError("NaN")
          else if(parseInt(nums[flag+1])===0)
            setError("Infinity")
          result = parseInt(nums[flag])/parseInt(nums[flag+1]);
          operArr.splice(flag,1);
          nums.splice(flag,2,result);
      }
      while(operArr.indexOf("+")!=-1)
      {
          let flag = operArr.indexOf("+");
          result = parseInt(nums[flag])+parseInt(nums[flag+1]);
          operArr.splice(flag,1);
          nums.splice(flag,2,result);
      }
      while(operArr.indexOf("-")!=-1)
      {
          let flag = operArr.indexOf("-");
          result = parseInt(nums[flag])-parseInt(nums[flag+1]);
          operArr.splice(flag,1);
          nums.splice(flag,2,result);
      }
      if(operArr.length < nums.length)
      {
        console.log(error)
        if(Number.isInteger(Number(parseInt(nums[0]))))
          {
            
              setDisplay(nums[0])
          }
          if(error)
              setDisplay(error);
          
      }
      else
        setDisplay("Error")
    }
    
  }
  return (
    <div className="containMe">
      <h1>React Calculator</h1>
      <input type="text" disabled value={value}></input>
      <p>{display}</p>
      <div className="row">
        <Keys value="7" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="8" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="9" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="+" handleClick={(e)=>handleClick(e.target.textContent)}/>
      </div>
      <div className="row">
        <Keys value="4" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="5" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="6" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="-" handleClick={(e)=>handleClick(e.target.textContent)}/>
      </div>
      <div className="row">
        <Keys value="1" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="2" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="3" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="*" handleClick={(e)=>handleClick(e.target.textContent)}/>
      </div>
      <div className="row">
        <Keys value="C" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="0" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="=" handleClick={(e)=>handleClick(e.target.textContent)}/>
        <Keys value="/" handleClick={(e)=>handleClick(e.target.textContent)}/>
      </div>
    </div>
  );
}

export default App;
