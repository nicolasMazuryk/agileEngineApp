import React from 'react'

const Button = (props) => {
  const {title, className, iconClassName, type, onClick} = props
  return (
    <button
      type={type || 'button'}
      className={`button ${className ? className : ''}`}
      onClick={onClick}
    >
      <span className="icon is-small">
        <i className={`fa ${iconClassName ? iconClassName : ''}`}></i>
      </span>
      <span>{title}</span>
    </button>
  )
}

export default Button
