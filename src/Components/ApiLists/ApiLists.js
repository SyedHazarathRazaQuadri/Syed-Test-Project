import React, { useEffect, useState } from 'react'
import './ApiLists.css'

const apiData = 'https://jsonplaceholder.typicode.com/posts/';

function ApiLists() {
    const [data,  setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

useEffect(()=>{
    const apiDataHandler = async()=>{
        let response = await fetch(apiData);
        let newData = await response.json();
        setData(newData)
    }
    apiDataHandler();
},[])

function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
        <form className='test_form' action="#">
            <input type="text" placeholder='Search List...' />
        </form>
        <div style={{textAlign: 'center'}} className='all_list_data'>
            {data.map((item)=>{
                const {id, title, body} = item;
                return(
                    <ul key={id}>
                        <li>{id}</li>
                        <li onClick={toggle} className='card_heading'>{title}</li>
                        <li className='card_body'>{isOpen && <span>{body}</span>}</li>
                    </ul>
                )
            })}
        </div>
    </>
  )
}

export default ApiLists