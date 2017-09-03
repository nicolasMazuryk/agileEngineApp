import React from 'react'
import Button from 'common/Button/Button'

const TableRow = (props) => {
  const {
    id,
    deleteProduct,
    product: {
      name,
      colors
    }
  } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{colors.join(', ')}</td>
      <td>
        <Button
          title='Delete'
          className='is-danger is-outlined is-pulled-right'
          iconClassName="fa-times"
          onClick={() => deleteProduct(id)}
        />
      </td>
    </tr>
  )
}

export default TableRow
