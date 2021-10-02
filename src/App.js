import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Anower','jafor','alomgir','salman']
  const products =[
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator', price:'60.99'},
    {name:'PDF Reader',price:'$6.99'}
]
const productNames = products.map(product => product.name)
console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Product product={products[0]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="cricket"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
 
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease =() =>  setCount(count + 1);
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick = {() => setCount(count +1)}>Increase</button>
      <button onClick = {() => setCount(count -1)}>Decrease</button>
    </div>
  )

}

function Person(props){
  return (
    <div style= {{border:'2px solid gold',width:'400px'}}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
    </div>
  )
}

export default App;
