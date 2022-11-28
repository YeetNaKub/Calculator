import './App.css';
import { useState } from 'react';
import { det } from 'mathjs';

function CramerV2() {
    const [result, setresult] = useState(null)
    const [size, setsize] = useState({ row: 0, col: 0 })// <- ประกาศตัวแปร usestate สำหรับดึงข้อมูล
    //ตัวแปรสำหรับสร้างตารางเมทตริก vvvv
    const createMatrix = (size) => {
      var matrixBox = [];
      for (let row1 = 0; row1 < size.row ; row1++) {
          for (let column1 = 0; column1 < size.col; column1++) {
             matrixBox.push(<input className="textin1" maxLength="2" type="text" id={"A"+row1+column1}/>)
          }
          matrixBox.push(<br />)
      }

      return matrixBox
  }
  //ตัวแปรสำหรับสร้างตารางเมทตริก vvvv
  const createMatrix2 = (size) => {
    var matrixBox = [];
    for (let row1 = 0; row1 < size.row ; row1++) {
          matrixBox.push(<input className="textin1" maxLength="2" type="text" id={"B"+row1}/>)
        matrixBox.push(<br />)
    }

    return matrixBox
}
    let matrix = Array(size.row)
    let matb = Array(size.row)
    for (let i = 0; i <size.row; i++) {
      matrix[i] = new Array(size.col).fill(0)
      matb[i] = 0;
  }
  const handleSubmit=(e)=>{
    for (let i = 0; i < size.row ; i++) {
      for (let j = 0; j < size.col; j++) {
        matrix[i][j]=parseInt(document.getElementById("A"+i+j).value)
        // console.log(matrix[i][j])
      }
      matb[i]=parseInt(document.getElementById("B"+i).value)
    }
    let ans = Array(size.row)
    let a = Array(size.row)
    if(size.row!==size.col){
      alert("Det Matrix Must Be Square")
    }
        for (let i = 0; i <size.row; i++) {
            a[i] = new Array(size.col).fill(0)
        }
  
        for (let k = 0; k < size.row; k++){
              if(det(matrix) === 0){
                alert("Det Matrix = 0")
                break;
              }
            for (let i = 0; i < size.row; i++) {
                for (let j = 0; j < size.col; j++) {
                  a[i][j] = matrix[i][j]
                }
              }
              let l=0;
              while (l < size.row) {
                a[l][k] = matb[l]
                l++;
              }
              ans[k] = det(a)/det(matrix)
            }
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
        <h1 className="head">CramerV2</h1>
      </header>
      <div className="blockl1">
        <div className="var1">
          <h2>ROW :</h2>
        </div>
          <div className="inputb1">  
                <input className="textin1" type="number" onChange={((event) => setsize({ ...size, row: event.target.value }))}/>
          </div>
        <div className="var1">
          <h2>COL :</h2>
        </div>
          <div className="inputb1">  
                <input className="textin1" type="number" onChange={((event) => setsize({ ...size, col: event.target.value }))}/>
          </div>
          {/* พื้นที่สำหรับแสดงผลตาราง vvvv */}
          <div className="inputl1">
          {/* เรียกใช้ตัวแปรสำหรับแสดงผลตาราง vvvv */}
            {createMatrix(size)}
        </div>
        <div className="inputl1">
            {createMatrix2(size)}
        </div>
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
export default CramerV2;
