import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import AddProductForm from 'components/AddProductForm/AddProductForm'
import InventoryTable from 'components/InventoryTable/InventoryTable'
import {
  getProducts,
  createProduct,
  deleteProduct
} from 'core/main/actions'

class Main extends PureComponent {
  render() {
    const {
      products,
      getProducts,
      createProduct,
      deleteProduct
    } = this.props
    return (
      <div>
        <AddProductForm
          title='Add New Product'
          createProduct={createProduct}
        />
        <InventoryTable
          products={products}
          getProducts={getProducts}
          deleteProduct={deleteProduct}
        />
      </div>
    )
  }
}

const mapStateToProps = ({products}) => {
  return {
    products
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    createProduct: (data) => dispatch(createProduct(data)),
    deleteProduct: (id) => dispatch(deleteProduct(id))
  }
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  getProducts: PropTypes.func,
  createProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
}

export default connect(mapStateToProps, mapStateToDispatch)(Main)
