import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import Categories from './Components/Categories';
import ShowFullItem from './Components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [], 
      items: [
        {
          id: 1,
          title: 'Сумка Balenciaga Rodeo Medium',
          img: 'rodeo.jpg',
          desc: 'Сумка Balenciaga Rodeo Medium черного цвета из гладкой телячьей кожи, фурнитура из состаренного золота',
          category: 'tote',
          price: '8990'
        },
        {
          id: 2,
          title: 'Сумка Saint Laurent Loulou',
          img: 'loulou.jpg',
          desc: 'Сумка Saint Laurent Loulou черного цвета из натуральной мягкой кожи, фурнитура из состаренного золота',
          category: 'crossbody',
          price: '6490'
        },
        {
          id: 3,
          title: 'Сумка The Row Margaux 15',
          img: 'margaux15.jpg',
          desc: 'Сумка The Row Margaux 15 бордового цвета из натуральной замши с серебряной фурнитурой',
          category: 'tote',
          price: '9990'
        },
        {
          id: 4,
          title: 'Сумка Polene Cyme Large',
          img: 'cyme.jpg',
          desc: 'Сумка Polene Cyme Large цвета кэмэл из натуральной гладкой кожи с золотой фурнитурой',
          category: 'shopper',
          price: '9490'
        },
        {
          id: 5,
          title: 'Сумка ALAIA Heart',
          img: 'heart.jpg',
          desc: 'Сумка ALAIA Heart черного цвета из натуральной матовой кожи с серебряной фурнитурой',
          category: 'shoulder',
          price: '5290'
        },
        {
          id: 6,
          title: 'Сумка Pinko Love Puff',
          img: 'puff.jpg',
          desc: 'Сумка Pinko Love Puff цвета хаки из натуральной мягкой кожи, фурнитура из состаренного золота',
          category: 'crossbody',
          price: '4990'
        },
        {
          id: 7,
          title: 'Сумка Bottega Veneta Arco Tote Medium',
          img: 'arco.jpg',
          desc: 'Сумка Bottega Veneta Arco Tote Medium трендового шоколадного отттенка из натуральной замши',
          category: 'tote',
          price: '8990'
        },
        {
          id: 8,
          title: 'Сумка Chanel Classic Flap Mini',
          img: 'flap.jpg',
          desc: 'Сумка Chanel Classic Flap Mini белого цвета из натуральной мягкой кожи с серебряной фурнитурой',
          category: 'crossbody',
          price: '6190'
        },
        {
          id: 9,
          title: 'Сумка Celine Claude',
          img: 'claude.jpg',
          desc: 'Сумка Celine Claude бежевого цвета из гладкой телячьей кожи, золотая фурнитура',
          category: 'shoulder',
          price: '5490'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addTo0rder = this.addTo0rder.bind(this) //делаем чтобы методы могли работать с состояниями и this
    this.delete0rder = this.delete0rder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.delete0rder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addTo0rder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addTo0rder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  delete0rder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addTo0rder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;