import React from 'react'
import PropTypes from 'prop-types'
import TableRow from 'common/TableRow/TableRow'

const Table = (props) => {
  const {rowList, deleteProduct, title} = props

  return (
    <div style={{width: '50%', margin: '0 auto'}}>
      {title && <h5 className="title is-5 has-text-centered">{title}</h5>}
      {!rowList.length ? (
        <h2 className="subtitle">You have no products in inventory yet</h2>
      ): (
        <table className="table is-striped is-fullwidth">
          <thead>
          <tr>
            <th>Name</th>
            <th>Colors</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {rowList.map((item) =>
            <TableRow
              key={item._id}
              id={item._id}
              product={item}
              deleteProduct={deleteProduct}
            />
          )}
          </tbody>
        </table>
      )}
    </div>
  )
}

Table.propTypes = {
  rowList: PropTypes.array,
  deleteProduct: PropTypes.func,
  title: PropTypes.string
}

export default Table
