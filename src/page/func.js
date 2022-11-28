import './App.css';
import {useRef} from 'react';
import { compile, parse } from 'mathjs';
import { useState } from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,} from 'recharts';

function Function() {
  const [result, setresult] = useState(null);
  const xrRef=useRef(null);
  const fxRef=useRef(null);
  const fx1Ref=useRef(null);
  var ans,ans1;
  var answer=[]
  var i;
  const handleSubmit=(e)=>{
    var xr=parseFloat(xrRef.current.value)
    var fx=fxRef.current.value;
    var fx1=fx1Ref.current.value;
    function calf1(x){
      let scope={x:x}
      let code=compile(fx1);
      return code.evaluate(scope);
    }
    function calf(x){
      let scope={x:x}
      let code=compile(fx);
      return code.evaluate(scope);
    }
    for(i=1;i<=xr;i++){ //เงื่่อนไขให้ i=..
      ans=calf(i);
      ans1=calf1(i);
      answer.push({i:i,ans:ans,ans1:ans1})
    }
    setresult(answer)
    document.getElementById("result").innerHTML="&nbsp"+"&nbsp"+"&nbsp"+"XR = "+xr+" Function = "+fx+" , "+fx1; // xRef ดึงค่าปัญจุบัน ของ ref
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">Function</h1>
      </header>
      <div className="block1">
        <div className="var1">
          <h2>XR :</h2>
        </div>
          <div className="inputb1">  
            <input className="textin1" type="text" ref={xrRef}  />
          </div>
          <div className="var1">
            <h2>Function :</h2>
          </div>
          <div className="inputb2">  
            <input className="textin1" type="text" ref={fxRef} />
          </div>
          <div className="var1">
            <h2>Function2 :</h2>
          </div>
          <div className="inputb2">  
            <input className="textin1" type="text" ref={fx1Ref} />
          </div>
          <button onClick={handleSubmit} >Calculate</button>
      </div>
        <div className='block2'>
          <br></br>
          <div id="result"className='textin2'></div>
      {result !== null && (
        <div>
        <br></br>
        <thead>
          <tr> 
            <th  className='textin2'>&nbsp;&nbsp;&nbsp;X</th>
            <th  className='textin2'>&nbsp;&nbsp;&nbsp;Y</th>
            <th  className='textin2'>&nbsp;&nbsp;&nbsp;Y</th>
          </tr>
        </thead>
        <tbody>
        {result.map((g) => (  
          <tr key={g.i}>
              <td>&nbsp;&nbsp;&nbsp;{g.i}</td>
              <td>&nbsp;&nbsp;&nbsp;{g.ans}</td>
              <td>&nbsp;&nbsp;&nbsp;{g.ans1}</td>
          </tr>
        ))}
        </tbody>
          <br></br>
          <br></br>
          <h2>Result</h2>
          <br></br>
        <LineChart width={800} height={500} data={result}>   
        {/* </*ตารางกราฟเชิงเส้น   */}
          <XAxis dataKey="i"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>    
          {/* //กราฟ  */}
          <Line type="monotone" dataKey="ans" stroke="#8884d8" />
          <Line type="monotone" dataKey="ans1" stroke="#694" />
        </LineChart>
        <br></br>
        <br></br>
        </div>
        )}
        </div>
    </div>
  );
}
export default Function;


