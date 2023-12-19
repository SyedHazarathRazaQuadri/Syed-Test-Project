import React, { useEffect, useState } from 'react'
import './ApiLists.css'

const apiData = 'https://jsonplaceholder.typicode.com/posts/';

function ApiLists() {
    const [data,  setData] = useState([]);
    const [inputData, setInputData] = useState('')

useEffect(()=>{
    const apiDataHandler = async()=>{
        let response = await fetch(apiData);
        let newData = await response.json();
        setData(newData)
    }
    apiDataHandler();
},[])


  return (
    <>
        <form className='test_form' action="#">
            <input type="text" placeholder='Search List...' onChange={(e) => setInputData(e.target.value)} />
        </form>
        <div style={{textAlign: 'center'}} className='all_list_data'>
            {data.map((item)=>{
                const {id, title, body} = item;
                return(
                    <ul key={id}>
                    <li>{id}</li>
                    <li className='card_heading'>{title}</li>
                    <li className='card_body'>{body}</li>
                </ul>
                )
            })}
        </div>
    </>
  )
}

export default ApiLists