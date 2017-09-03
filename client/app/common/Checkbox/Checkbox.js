import React from 'react'

const Checkbox = (props) => {
  const {
    checked,
    label,
    onChange
  } = props
  return (
    <div>
      <label className="checkbox">
        <input
          type="checkbox"
          name={label}
          checked={checked}
          style={{marginRight: 10}}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox
