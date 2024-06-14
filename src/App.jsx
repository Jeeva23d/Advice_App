import { useEffect, useState } from 'react'
import dice from '/icon-dice.svg'
import design from '/design.svg'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("Take a Free Advice...")
  const [count,setCount] = useState(0);
  
  async function getAdvice(){
    
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setAdvice(data.slip.advice);
    setCount(data.slip.id);
  }

  useEffect(() => {
    setTimeout(() => {
      getAdvice();
    }, 1000);
  });
  
  return (
    <>
      <div className='Card'>
        <p>ADVICE #{count}</p>
        <h2>{advice}</h2>
        <img src={design} alt='designImages'></img>
        <div className='dice' onClick={getAdvice}>
              <img src={dice} alt='DiceImage'></img>
        </div>

      </div>
    </>
  )
}

export default App
