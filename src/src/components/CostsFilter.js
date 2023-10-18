import './CostsFilter.css'

const CostsFilter = (props) => {

    const yearChangeHandler = (event)=>{
        props.onChangeYear(event.target.value);
    }
    
    return(
        <div className="year">
            <label>Filter by year </label>
            <select value={props.default_year} onChange={yearChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    );
};
export default CostsFilter;