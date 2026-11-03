import { createElement, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const element = createElement('h1',null,'Hello Omkar!!');
  const element1 = <h1>Hello Patil</h1>
  const card = (<div>
    <p >Hello</p>
    <h2>World</h2>
  </div>

  );
const isAvailable = false;
  console.log("Hello")
  return (
   <div>
   {element} {element1} {card}
   <p className='card'>{isAvailable?'Available':'Not Available'}</p>
   if (true) {
    <h1>Hello</h1>
    
   }
   </div>
  )
  // <>h1</>
}

export default App
////////////////////////////////////////////////////
// String Attribute
// <h1 title="Vehicle Name">Thar</h1>


// Dynamic Attribute
// function App() {
//   const imageUrl = '/images/thar.jpg';

//   return <img src={imageUrl} alt="Mahindra Thar" />;
// }

// function App() {
//   const isDisabled = true;

//   return (
//     <button disabled={isDisabled}>
//       Submit
//     </button>
//   );
// }

{/* This is a JSX comment */}

{/* <p style={{ color: 'red', fontSize: '20px' }}>
  Hello
</p> */}
