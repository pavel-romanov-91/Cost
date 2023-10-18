import CostForm from "./CostForm"

const NewCost = (props) =>{
    const onSaveCostsDataHandler = (inputCostData)=>{
    
        console.log(inputCostData);
        console.log("New Cost Component");
        props.onAddCost(inputCostData)
    }

    return(
    <div>
        <CostForm onSaveCostsData = {onSaveCostsDataHandler}/>
    </div>)

}
export default NewCost