import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Input from 'common/Input/Input'
import CheckList from 'common/CheckList/CheckList'
import Button from 'common/Button/Button'

class AddProductForm extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      inputHasError: false,
      colors: [
        {
          color: 'green',
          checked: false
        },
        {
          color: 'red',
          checked: false
        },
        {
          color: 'blue',
          checked: false
        }
      ]
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({name: e.target.value})
  }

  onCheckboxChange(e) {
    const {name, checked} = e.target
    const colors = this.state.colors.map(item => {
      if (item.color === name) {
        item.checked = checked
      }
      return item
    })
    this.setState({colors})
  }

  onSubmit(e) {
    e.preventDefault()
    const {name, colors} = this.state
    if (!/^[a-zA-Z0-9]{4,8}$/.test(name)) {
      return this.setState({inputHasError: true})
    }
    const checkedColors = colors.filter(item => item.checked).map(item => item.color)
    this.props.createProduct({name, colors: checkedColors})
  }

  render() {
    const {
      name,
      colors,
      inputHasError
    } = this.state
    const inputErrorMessage = '4-8 characters, only numbers and letters allowed.'

    return (
      <form onSubmit={this.onSubmit} className="columns">
        <div
          className="column is-4 is-offset-4"
          style={{
            backgroundColor: '#f5f5f5',
            margin: '25px auto'
          }}>
          <h5 className="title is-5 has-text-centered">{this.props.title}</h5>
          <Input
            type='text'
            label='Name'
            placeholder='Name'
            value={name}
            hintText={inputErrorMessage}
            hasError={inputHasError}
            onChange={this.onInputChange}
          />
          <CheckList
            groupLabel='Color'
            list={colors}
            onChange={this.onCheckboxChange}
          />
          <Button
            title='Save'
            type='submit'
            className='is-success is-pulled-right'
            iconClassName="fa-check"
          />
        </div>
      </form>
    )
  }
}

AddProductForm.propTypes = {
  createProduct: PropTypes.func,
  title: PropTypes.string
}

export default AddProductForm
