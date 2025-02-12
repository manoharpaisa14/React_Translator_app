import React, { useState } from 'react'

const Form = () => {
    const [branch,setBranch] = useState("CSE");

  return (
    <div>
        <h1>MANU</h1>
      <label>Branch</label>
      <select value={branch} onChange={(event) => setBranch(event.target.value)}>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
        <option>MECH</option>
      </select>
      <h3>you selected:{branch}</h3>
    </div>
  )
}

export default Form
