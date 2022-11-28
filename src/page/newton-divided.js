import './App.css';
import {useRef} from 'react';
import { useState } from 'react';

function NewtonDivided() {
    var row;
    const getInitialState = () => {
    const value = "4";
    return value;
    };
    const [value, setValue] = useState(getInitialState);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    row=parseInt(value);
    let mt = Array(row+1)
    let matrix = Array(row)
    let matb = Array(row)
    let results = []
    let sum;
    const xRef = useRef(null);
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const m3Ref = useRef(null);
    const m4Ref = useRef(null);
    const m5Ref = useRef(null);
    const m6Ref = useRef(null);
    const b1Ref = useRef(null);
    const b2Ref = useRef(null);
    const b3Ref = useRef(null);
    const b4Ref = useRef(null);
    const b5Ref = useRef(null);
    const b6Ref = useRef(null);
    var v;
    for (let i = 0; i <row; i++) {
        mt[i] = new Array(row).fill(0)
        matrix[i] = 0;
        matb[i] = new Array(row).fill(0);
    }
    const [result, setresult] = useState(null)
    const [ans, setans] = useState(null)
  const handleSubmit=(e)=>{
    setresult([]);
    v=parseFloat(xRef.current.value);
        if (row==4){
            matrix[0] =parseFloat(m1Ref.current.value)
            matrix[1] =parseFloat(m2Ref.current.value)
            matrix[2] =parseFloat(m3Ref.current.value)
            matrix[3] =parseFloat(m4Ref.current.value)
            matb[0][0] =parseFloat(b1Ref.current.value)
            matb[1][0] =parseFloat(b2Ref.current.value)
            matb[2][0] =parseFloat(b3Ref.current.value)
            matb[3][0] =parseFloat(b4Ref.current.value)
             // for (let i = 0; i <row; i++) {
            //     console.log(matrix[i]);
            //     console.log(matb[i]);
            // }
        }
        if (row==5){
            matrix[0] =parseFloat(m1Ref.current.value)
            matrix[1] =parseFloat(m2Ref.current.value)
            matrix[2] =parseFloat(m3Ref.current.value)
            matrix[3] =parseFloat(m4Ref.current.value)
            matrix[4] =parseFloat(m5Ref.current.value)
            matb[0][0] =parseFloat(b1Ref.current.value)
            matb[1][0] =parseFloat(b2Ref.current.value)
            matb[2][0] =parseFloat(b3Ref.current.value)
            matb[3][0] =parseFloat(b4Ref.current.value)
            matb[4][0] =parseFloat(b5Ref.current.value)
             // for (let i = 0; i <row; i++) {
            //     console.log(matrix[i]);
            //     console.log(matb[i]);
            // }
        }
        if (row==6){
            matrix[0] =parseFloat(m1Ref.current.value)
            matrix[1] =parseFloat(m2Ref.current.value)
            matrix[2] =parseFloat(m3Ref.current.value)
            matrix[3] =parseFloat(m4Ref.current.value)
            matrix[4] =parseFloat(m5Ref.current.value)
            matrix[5] =parseFloat(m6Ref.current.value)
            matb[0][0] =parseFloat(b1Ref.current.value)
            matb[1][0] =parseFloat(b2Ref.current.value)
            matb[2][0] =parseFloat(b3Ref.current.value)
            matb[3][0] =parseFloat(b4Ref.current.value)
            matb[4][0] =parseFloat(b5Ref.current.value)
            matb[5][0] =parseFloat(b6Ref.current.value)
            // for (let i = 0; i <row; i++) {
            //     console.log(matrix[i]);
            //     console.log(matb[i]);
            // }
        }
        let n = row

        const proterm = (i) =>{
          let pro = 1;
            for (let j = 0; j < i; j++) {
                pro = pro * (v - matrix[j]);
            }
        return pro;
        }
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < n - i; j++) {
                matb[j][i] = (matb[j][i - 1] - matb[j + 1]
                            [i - 1]) / (matrix[j] - matrix[i + j]);
            }
        }

        sum = matrix[0][0];
        for (let i = 1; i < n; i++) {
          sum = sum + (proterm(i) * matb[0][i]);
          }
        for (let i = 0; i < n; i++){
          results.push({
            x: matrix[i],
            y: matb[i][0]
        })
        if(v > matrix[i] && v < matrix[i+1]){
          results.push({
            x: v,
            y: sum
        })
        }
    }
        setans(sum)
        setresult(results);
        console.log(result);
        console.log(ans)

      }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">Newton Divided</h1>
      </header>
      <div className="blockl1">
        <div className='inputrc'>
        <form>
            <select className='textin1' value={value} onChange={handleChange}>
                <option className='textin1' value="4">4</option>
                <option className='textin1' value="5">5</option>
                <option className='textin1' value="6">6</option>
            </select>
        </form>
        </div>
        {row === 4 &&(
        <div className='metrixnd2'>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m1Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m2Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m3Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m4Ref}/>
            </div>
        </div>
        )}
        {row === 4 &&(
        <div className='metb1'>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b1Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b2Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b3Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b4Ref}/>
            </div>
        </div>
        )}
        {row === 5 &&(
        <div className='metrixnd2'>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m1Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m2Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m3Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m4Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m5Ref}/>
            </div>
        </div>
        )}
        {row === 5 &&(
        <div className='metb1'>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b1Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b2Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b3Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b4Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b5Ref}/>
            </div>
        </div>
        )}
        {row === 6 &&(
        <div className='metrixnd2'>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m1Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m2Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m3Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m4Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m5Ref}/>
            </div>
            <div className="inputl2">  
              <input className="textin1" maxLength="6" type="text" ref={m6Ref}/>
            </div>
        </div>
        )}
        {row === 6 &&(
        <div className='metb1'>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b1Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b2Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b3Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b4Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b5Ref}/>
            </div>
            <div className="inputl2">  
                <input className="textin1" maxLength="6" type="text" ref={b6Ref}/>
            </div>
        </div>
        )}
        <div className="var1">
          <h2>X :</h2>
        </div>
          <div className="inputb1">  
            <input className="textin1" type="text" ref={xRef}/>
          </div>
          <button onClick={handleSubmit}>Calculate</button>
      </div>
      {result !== null && (
        <div className='block2'>
        <br></br>
        {result.map((g) => (
          <tr key={g.x}>
              <td>&nbsp;&nbsp;&nbsp;x :&nbsp;&nbsp;{g.x}</td>
              <td>&nbsp;&nbsp;&nbsp;y :&nbsp;&nbsp;{g.y}</td>
          </tr>
        ))}
        <br></br>
        </div>
        )}

    </div>
  );
}
export default NewtonDivided;
