import './CostForm.css'
import React, {useState} from 'react';

const CostForm = (props)=>{
    const [description,setDescription] = useState(''); 
    const [price,setPrice] = useState(''); 
    const [date,setDate] = useState('');

    const dateChangeHandler = (event) => {     
        setDate(event.target.value)
    }


    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const nameChangeHandler = (event) => {
      
        setDescription(event.target.value)
    }
    const SubmitHandler = (event) =>{
        event.preventDefault();

        const costData ={
            description: description,
            price: price,
            date: new Date(date)
        };
        setDescription('');
        setPrice('');
        setDate('');
        props.onSaveCostsData(costData)

    }

    return <form onSubmit={SubmitHandler} className='cost_form'>
        <div className='fg'>
            <label>Название</label>
            <input type="text" value={description} onChange={nameChangeHandler}/>
        </div>

        <div className='fg'>
            <label>Сумма</label>
            <input type="number" value={price} onChange={priceChangeHandler}/>
        </div>
        <div className='fg'>
            <label>Дата</label>
            <input type="date" value={date}onChange={dateChangeHandler}/>
        </div>

        <button type="submit">Добавить расход</button>
    </form>
}
export default CostForm