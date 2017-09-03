import React from 'react'

const Input = (props) => {
  const {
    label,
    type,
    value,
    placeholder,
    className,
    hintText,
    hasError,
    onChange
  } = props
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className={`input ${className ? className : ''} ${hasError ? 'is-danger' : ''}`}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
          {hasError && <p className={`help ${hasError ? 'is-danger' : ''}`}>{hintText}</p>}
        </div>
      </div>
    </div>
  )
}

export default Input
