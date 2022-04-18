import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState,useEffect} from "react"
function App() {
  const [showStudent,setShowStudent] = useState("show")

 
  const handleChangeOfPage = ()=>{
      if(showStudent === "add")
      {
        setShowStudent("show")
      }
      else if(showStudent === "show")
      {
        setShowStudent("add")
      }
      console.log(showStudent)
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={handleChangeOfPage}>{showStudent ==="show" ? "Add a new student":"Go To Student List"}</button>
   
      {showStudent ==="show" ? <ShowStudents/>:<AddStudent/> 
      /* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;