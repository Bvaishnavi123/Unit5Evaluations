import { useState, useEffect } from "react";
import "./ShowStudent.css"
export const ShowStudents = () => {
  const [data, setData] = useState([]);
  const [coffee , setCoffee]= useState("");
  const getData = async () => {
    const res = await fetch("http://localhost:8080/students").then((d) =>
      d.json()
    );
    //console.log(res)
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  const sortingHandler = (e)=>{
    console.log(e.target.value)
  }

  const selectHandler = (e)=>{
    //console.log(e.target.value)
    setCoffee(e.target.value)
    if(e.target.value === "first_name")
    {
       let newarr = data.sort(function(a,b){
          return a.first_name[0].charCodeAt(0)-b.first_name[0].charCodeAt(0)
       })
       console.log(newarr);
       setData(prevState=>{
         return prevState = newarr
       })
    }
  }


 
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={selectHandler}
           
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={sortingHandler}
             
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {
            /* populate all rows like below: */
            data.map((e) => {
              return (
                <tr className="row">
                  <td className="first_name">{e.first_name}</td>
                  <td className="last_name">{e.last_name}</td>
                  <td className="email">{e.email}</td>
                  <td className="gender">{e.gender}</td>
                  <td className="age">{e.age}</td>
                  <td className="tenth_score">{e.tenth_score}</td>
                  <td className="twelth_score">{e.twelth_score}</td>
                  <td className="preferred_branch">{e.preferred_branch}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
