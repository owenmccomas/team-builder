import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialMember = {
  name: "",
  email: "",
  role: "",
};

function App(props) {
  // const { update } = props;
  const onChange = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target;
    // update(name, value);
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const submitForm = () => {

    const newMember = {
      name: memberValues.name,
      email: memberValues.email,
      role: memberValues.role,
    };

    if (!newMember.username || !newMember.email || !newMember.role) return;

    axios.post("localhost:3000", newMember).then((res) => {
      console.log(res);
    });
    setMemberValues(initialMember).catch(console.log('err'));
  };

  useEffect(() => {
    axios.get("localhost:3000").then((res) => setMember(res.data));
  }, []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [member, setMember] = useState([]);
  const [memberValues, setMemberValues] = useState(initialMember);
  const update = (inputName, inputValue) => {
    setMemberValues({ ...memberValues, [inputName]: inputValue });
  };
  const values = {
    name: member.username,
    email: member.email,
    role: member.role,
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Type Name"
          value={values.name}
          onChange={onChange}
          maxLength="15"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Type Email"
          value={values.email}
          onChange={onChange}
        />
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--- Select a Role---</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Team-Lead">Team Lead</option>
          </select>
        </label>
        <button onClick={submitForm}>Submit</button>
      </header>
    </div>
  );
}
export default App;
