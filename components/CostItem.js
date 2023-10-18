import CostDate from './CostDate';
import './CostItem.css'


function CostItem(props){

    
   

	return (
        <div className="cost_item">
            
            <CostDate date={props.date}/>
            <h2>{props.description}</h2> 
            <div>
                <div>{props.price}</div> 
                
            </div>
    
        </div>
    )
}
export default CostItem;