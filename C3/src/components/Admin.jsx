export const Admin = () => {
    return (
      <form className="createEmployee">
        <input type="text" placeholder="Employee Name" name="employee_name" required/>
        <input type="text" placeholder="Employee id" name="employee_id" required/>
        <select name="title" required>
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input type="number" placeholder="Salary" name="salary" required />
        <input type="text" placeholder="Image" name="image" required />
        <input type="text" placeholder="User Name" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
          required
        />
        <select name="status" id="status" required>
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select name="team" id="team" required>
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };