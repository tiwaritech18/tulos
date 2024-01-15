import React from 'react';
import "./Sidebar.scss"

const FilterOption = ({ label, value, onChange, onClick }) => (
  <label>
    {label}
    <input className="custom-radio" type="radio" name="category" value={value} onChange={onChange} onClick={onClick} />
  </label>
);

export default FilterOption;
