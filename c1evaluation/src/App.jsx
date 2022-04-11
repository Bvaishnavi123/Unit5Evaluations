import { useState } from "react";
import "./App.css"
function App() {

    const [cricketinfo,setcrickket] = useState({
      score : 76,
      wicket :2,
      over : 50
      
    })
    const [balldependover,setball]= useState(0)
    if(cricketinfo.score>=100)
    {
      return <h1 className="status">India Won</h1>
    }
    // if(cricketinfo.over=5)
    // {
    //   setball(balldependover+1)
    // }

    const scorehandler = (v)=>{
     
      setcrickket(prevState=>{
        return {
          score : prevState.score + v,
          wicket:prevState.wicket,
          over : prevState.over
        }
      })
    }

    const wickethandler = (v)=>{
      setcrickket(prevState=>{
        return {
          score : prevState.score,
          wicket:prevState.wicket+v,
          over : prevState.over
        }
      })
    }
   
    const ballhandler = (v)=>{
      
      setcrickket(prevState=>{
        return {
          score : prevState.score,
          wicket:prevState.wicket,
          over : prevState.over+v
        }
      })
    }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{cricketinfo.score}
          <h1 className="scoreCount">
            {
              // show "score" here
              cricketinfo.score
            }
          </h1>
        </div>
        <div>
          Wicket:{cricketinfo.wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
              cricketinfo.wicket
            }
          </h1>
        </div>

        <div>
          Over:{cricketinfo.over}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              [`${balldependover}.`,cricketinfo.over]
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>scorehandler(1)}>Add 1</button>
        <button className="addScore4"  onClick={()=>scorehandler(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>scorehandler(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>wickethandler(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button  onClick={()=>ballhandler(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;