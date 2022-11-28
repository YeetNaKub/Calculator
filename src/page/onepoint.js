import './App.css';
import {useRef} from 'react';
import { compile,} from 'mathjs';
import { useState } from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,} from 'recharts';

function OnePoint() {
  const [result, setresult] = useState(null);
  const xRef = useRef(null);
  const erRef = useRef(null);
  const fxRef = useRef(null);
  var arr=[];
  const handleSubmit=(e)=>{
    arr = [];
    var eri=erRef.current.value;
    var x=xRef.current.value;
    var xm=0,fxm=0,count=0,er=1;
    var fx=fxRef.current.value;
    var xr=parseFloat(xr)
    var xl=parseFloat(xl)
    var eri=parseFloat(eri)
    function func(x){
      let scope={x:x}
      let code=compile(fx);
      return code.evaluate(scope);
    }
    while(er>eri){
        xm = func(x);
        er = Math.abs((xm-x)/xm)*100;
        x = xm;

        count++;
        arr.push({xm:xm.toFixed(6),er:er.toFixed(6),iteration:count})
      }
      // let Len = arr.length;
      // for (let i = 0; i < Len; i++) {
      //   console.log(arr[i]);
      // }
      // console.log(arr)
      setresult(arr)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">OnePoint Method</h1>
      </header>
      <div className="block1">
        <div className="var1">
          <h2>X :</h2>
        </div>
          <div className="inputb1">  
            <input className="textin1" type="text" ref={xRef}/>
          </div>
          <div className="var1">
            <h2>Error :</h2>
          </div>
          <div className="inputb3">  
            <input className="textin1" type="text" ref={erRef}/>
          </div>
          <div className="var1">
            <h2>Function :</h2>
          </div>
          <div className="inputb2">  
            <input className="textin1" type="text" ref={fxRef}/>
          </div>
          <button onClick={handleSubmit}>Calculate</button>
      </div>
      {result !== null && (
        <div className='block2'>
        <br></br>
        {result.map((g) => (
          <tr key={g.iteration}>
              <td>&nbsp;&nbsp;&nbsp;Iteration#{g.iteration}</td>
              <td>&nbsp;&nbsp;&nbsp;Xm={g.xm}</td>
              <td>&nbsp;&nbsp;&nbsp;Error={g.er}</td>
          </tr>
        ))}
        <br></br>
        <br></br>
        <h2>Result</h2>
        <br></br>
        <LineChart width={800} height={500} data={result}>
          <XAxis dataKey="iterration"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="xm" stroke="#8884d8" />
        </LineChart>
        <br></br>
        <br></br>
        <h2>Error</h2>
        <br></br>
        <LineChart width={800} height={500} data={result}>
          <XAxis dataKey="iterration"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="er" stroke="#82ca9d" />
        </LineChart>
        </div>
        )}
    </div>
  );
}
export default OnePoint;
