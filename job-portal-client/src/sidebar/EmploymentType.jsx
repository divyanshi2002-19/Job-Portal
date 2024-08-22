//1.
import React from "react"
import InputField from "../components/InputField";
const EmploymentType = ({handleChange}) => {
  return (
    //2.copy form location.jsx and do changes accodrfing to jobs.json in value
    <div>
      <h4 className="text-lg font-medium mb-2">Type of employment</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
       
      </div>
    </div>
  );
}
export default EmploymentType