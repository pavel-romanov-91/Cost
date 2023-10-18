
import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react'

const INITIAL_COSTS = [
  {
    date: new Date(2021,8,22,),
   description: "Очень нужное1",
   price:123
  },
  {
    date: new Date(2021,11,23,),
    description: "Очень нужное2",
    price:3455
  },
  {
    date: new Date(2021,10,23,),
    description: "Очень нужное3",
    price:4358
  }
];

function App() {
  
const [items,setItems] = useState(INITIAL_COSTS);

const addCostHandler = (cost)=>{
  setItems(items =>{
  return [cost, ...items]
      });
};

  return (
    <div>

     <Costs items={items}/>
     <NewCost onAddCost = {addCostHandler}/>
     
    </div>
  );
}

export default App;

