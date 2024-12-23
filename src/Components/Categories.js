import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
        categories: [
            {
                key: 'all',
                name: 'Все'
            },
            {
                key: 'tote',
                name: 'С ручками'
            },
            {
                key: 'crossbody',
                name: 'Кросс-боди'
            },
            {
                key: 'shopper',
                name: 'Шопер'
            },
            {
                key: 'shoulder',
                name: 'Через плечо'
            }
        ]
    }
  }
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories