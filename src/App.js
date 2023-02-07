
import './App.css';
import Navbar from './Navbar';
import { Data } from './Data';
import Card from './Card';

function App() {
const travelData = Data.map(item=>{
  return <Card id={item} 
  item={item}/>
})

  return (
    <div className="App">
   <Navbar/>
   <div className='card-list'>
   {travelData}
   </div>
    </div>
  );
}

export default App;
