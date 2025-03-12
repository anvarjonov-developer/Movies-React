import './list.css'
import { Component } from 'react'
function List(props){
    const {title, viewers, onDelete, onToggleProp, favourite,like} = props

    return(
        <li className={`list-group-item d-flex justify-content-between p-4 list ${favourite && 'active'}`}>
            <span data-toggle='like' onClick={onToggleProp} className='list-group-item-label fw-bold'>{title}</span>
            <div className='d-flex gap-2'>

            
            <input type="number" className='list-group-item-input text-center valueinput' defaultValue={viewers} />
            <div className='d-flex justify-content-center align-items-center gap-1'>
                <button data-toggle='favourite' onClick={onToggleProp} type='button' className='btn-cookie btn-sm'>
                    <i className='fas fa-cookie'></i>
                </button>
                <button onClick={onDelete} type='button' className='btn btn-trash btn-sm'>
                    <i className="fas fa-trash"></i>
                 </button>
                 <i className={`fas fa-star ${like && 'show'}`}></i>
            </div>
            </div>
        </li>
    )
}



export default List