import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

function GaussElimination() {
    var row;
    const getInitialState = () => {
    const value = "2";
    return value;
    };
    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    row=parseInt(value);
    let matrix = Array(row+1)
    let matb = Array(row)
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const m3Ref = useRef(null);
    const m4Ref = useRef(null);
    const m5Ref = useRef(null);
    const m6Ref = useRef(null);
    const m7Ref = useRef(null);
    const m8Ref = useRef(null);
    const m9Ref = useRef(null);
    const b1Ref = useRef(null);
    const b2Ref = useRef(null);
    const b3Ref = useRef(null);
    for (let i = 0; i <row; i++) {
        matrix[i] = new Array(row).fill(0)
        matb[i] = 0;
    }
    const [result, setresult] = useState(null)
    const handleSubmit=(e)=>{
        if (row==2){
            matrix[0][0] =parseFloat(m1Ref.current.value)
            matrix[0][1] =parseFloat(m2Ref.current.value)
            matrix[1][0] =parseFloat(m4Ref.current.value)
            matrix[1][1] =parseFloat(m5Ref.current.value)
            matb[0] =parseFloat(b1Ref.current.value)
            matb[1] =parseFloat(b2Ref.current.value)
            // for (let i = 0; i <row; i++) {
            //     for (let j = 0; j <row; j++) {
            //         console.log(matrix[i][j]);
            //     }
            //     console.log(matb[i]);
            // }
        }
        if (row==3){
            matrix[0][0] =parseFloat(m1Ref.current.value)
            matrix[0][1] =parseFloat(m2Ref.current.value)
            matrix[0][2] =parseFloat(m3Ref.current.value)
            matrix[1][0] =parseFloat(m4Ref.current.value)
            matrix[1][1] =parseFloat(m5Ref.current.value)
            matrix[1][2] =parseFloat(m6Ref.current.value)
            matrix[2][0] =parseFloat(m7Ref.current.value)
            matrix[2][1] =parseFloat(m8Ref.current.value)
            matrix[2][2] =parseFloat(m9Ref.current.value)
            matb[0] =parseFloat(b1Ref.current.value)
            matb[1] =parseFloat(b2Ref.current.value)
            matb[2] =parseFloat(b3Ref.current.value)
            // for (let i = 0; i <row; i++) {
            //     for (let j = 0; j <row; j++) {
            //         console.log(matrix[i][j]);
            //     }
            //     console.log(matb[i]);
            // }
        }
        let ans = Array(row).fill(0)
        let matrixTemp = []
        for (let i = 0; i < matrix[0].length; i++) {
            let temp = []
            for (let j = 0; j < row + 1; j++) {
                if (j < row) {
                    temp.push(matrix[i][j])
                }
                else {
                    temp.push(matb[i])
                }
            }
            matrixTemp.push(temp)
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row; j++) {
                if (i !== j) {
                    let temp = matrixTemp[j][i] / matrixTemp[i][i]
                    for (let k = 0; k < matrixTemp.length + 1; k++) {
                        matrixTemp[j][k] = matrixTemp[j][k] - temp * matrixTemp[i][k]
                    }
                }
            }
        }
        for (let i = 0; i < matrixTemp.length; i++) {
            ans[i] = parseFloat((matrixTemp[i][matrixTemp.length] / matrixTemp[i][i]))
        }
            console.log(ans)
            setresult(ans)
        }
        if(result !== null){
            let Len = result.length;
                var text = '<tr>';
                for (let i = 0; i < Len; i++) {
                    text +='&nbsp'+'&nbsp'+'&nbsp'+'X'+(i+1)+'&nbsp'+':'+'&nbsp'+ result[i]+'<br>';;
                }
                text += '</tr>';
                document.getElementById("result").innerHTML =text;
        }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">Gauss Elimination</h1>
      </header>
      <div className="blockl1">
        <div className='inputrc'>
        <form>
            <select className='textin1' value={value} onChange={handleChange}>
                <option className='textin1' value="2">2x2</option>
                <option className='textin1' value="3">3x3</option>
            </select>
        </form>
        </div>
        {row === 2 &&(
        <div className='metrix2'>
            <div className="inputl1">  
              <input className="textin1" maxLength="4" type="text" ref={m1Ref}/>
            </div>
            <div className="inputl1">  
              <input className="textin1" maxLength="4" type="text" ref={m2Ref}/>
            </div>
            <div className="inputl1">  
              <input className="textin1" maxLength="4" type="text" ref={m4Ref}/>
            </div>
            <div className="inputl1">  
              <input className="textin1" maxLength="4" type="text" ref={m5Ref}/>
            </div>
        </div>
        )}
        {row === 2 &&(
        <div className='metb'>
            <div className="inputl1">  
                <input className="textin1" maxLength="4" type="text" ref={b1Ref}/>
            </div>
            <div className="inputl1">  
                <input className="textin1" maxLength="4" type="text" ref={b2Ref}/>
            </div>
        </div>
        )}
        {row === 3 &&(
        <div className='metrix3'>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m1Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m2Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m3Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m4Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m5Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m6Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m7Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m8Ref}/>
          </div>
          <div className="inputl1">  
            <input className="textin1" maxLength="4" type="text" ref={m9Ref}/>
          </div>
        </div>
        )}
        {row === 3 &&(
        <div className='metb'>
            <div className="inputl1">  
                <input className="textin1" maxLength="4" type="text" ref={b1Ref}/>
            </div>
            <div className="inputl1">  
                <input className="textin1" maxLength="4" type="text" ref={b2Ref}/>
            </div>
            <div className="inputl1">  
                <input className="textin1" maxLength="4" type="text" ref={b3Ref}/>
            </div>
        </div>
        )}
          <button onClick={handleSubmit}>Calculate</button>
      </div>
      <div className='block5'>
        <br></br>
        <div id='result' className='textin2'></div>
        <br></br>
        </div>
    </div>
  );
}
export default GaussElimination;
