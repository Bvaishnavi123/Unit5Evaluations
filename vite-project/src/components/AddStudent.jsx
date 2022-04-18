import { useState, useEffect } from "react";
import "./AddStudent.css"
export const AddStudent = () => {
  const [data, setData] = useState([]);
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

  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: 0,
    tenth_score: 0,
    twelth_score: 0,
    preferred_branch: "",
  });

  const handler = (e) => {
    e.preventDefault();
    //console.log(e.target.name)
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (student.age >= 50) {
      alert("Age is Invalid");
    }
    if (student.tenth_score > 100 || student.twelth_score > 100) {
      alert("Score should not be more than 1000....Invalid Score");
    }
    if (student.first_name === "" || student.last_name === "") {
      alert("Type Error");
    }

    const payload = student;

    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(() => {
      getData();
    });
  };
  return (
    <form className="addstudent" onSubmit={submitHandler}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handler}
          required
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handler}
          required
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handler}
          required
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handler}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handler}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handler}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handler}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handler}
          required
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handler}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        <div className="error">
         
        </div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
