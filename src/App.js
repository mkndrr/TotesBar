import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Сумка Balenciaga Rodeo Medium',
          img: '',
          desc: '',
          category: 'tote',
          price: '8990'
        },
        {
          id: 2,
          title: 'Сумка Saint Laurent Loulou',
          img: '',
          desc: '',
          category: 'crossbody',
          price: '6490'
        }
      ]
    }
  }
  render(){
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;