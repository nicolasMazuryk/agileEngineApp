import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Table from 'common/Table/Table'

class InventoryTable extends PureComponent {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const {
      products,
      deleteProduct
    } = this.props

    return <Table
      rowList={products}
      deleteProduct={deleteProduct}
      title='Product Inventory'
    />
  }
}

InventoryTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  deleteProduct: PropTypes.func
}

export default InventoryTable
