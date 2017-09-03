import React from 'react'
import Checkbox from 'common/Checkbox/Checkbox'

const CheckList = (props) => {
  if (!props.list.length) {
    return null
  }
  const {
    list,
    groupLabel,
    onChange,
  } = props

  return (
    <div>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">{groupLabel}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              {list.map(item => {
                return (
                  <Checkbox
                    key={item.color}
                    checked={item.checked}
                    label={item.color}
                    onChange={onChange}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckList
