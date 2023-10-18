import "./CostDate.css"
function CostDate(props) {

    const month = props.date.toLocaleString("ru-RU",{month: "long"});
    const year = props.date.getFullYear(); 
    const day = props.date.toLocaleString("ru-RU",{day: "2-digit"});

    return(
         <div className="date_component">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
            
         </div>

    )

}
export default CostDate