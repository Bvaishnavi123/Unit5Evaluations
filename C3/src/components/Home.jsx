import {Stactics} from "../Context/Statics"
import {useContext} from "react"
import "./Homepage.css"

export const Home = () => {
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created
   
  
    const {length} = useContext(Stactics)
    const {terminated} = useContext(Stactics)
    const {pramoted} = useContext(Stactics)
    const {newuser} = useContext(Stactics)
    
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp">:{length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{terminated}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{pramoted}</span>
          </div>
          <div>
            Total New: <span className="total_new">{newuser}</span>
          </div>
        </div>
      </>
    );
  };