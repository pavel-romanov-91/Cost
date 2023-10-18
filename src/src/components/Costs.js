import CostItem from "./CostItem"
import CostsFilter from "./CostsFilter"
import React, {useState} from 'react'

const Costs = (props) =>{
    const [selectedYear,setSelectedYear] = useState('2021')

    const filteredCosts = props.items.filter( cost =>{
        return cost.date.getFullYear().toString()===selectedYear
    });


    const yearChangeHandler = (year)=>{
        console.log(year);
        console.log("Costs Component");
        setSelectedYear(year)
    }
    return(
    <div>
        <CostsFilter default_year={selectedYear} onChangeYear={yearChangeHandler}/>
        {filteredCosts.length===0 && <p > <center>В этом году расходов не было</center></p>}
        {filteredCosts.length!==0 &&  filteredCosts.map((cost) => (
            <CostItem 
                date={cost.date}
                description={cost.description}
                price={cost.price}
            />
        ))}
       
        
        
        



        
        
    </div>
    )

} 
export default Costs
