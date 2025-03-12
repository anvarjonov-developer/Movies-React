import './search.css'
import Btns from '../btns/btn'

import {Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {term : ''}
    }
    updateTerm = (e)=>{
   
        const term = e.target.value
        this.setState({term})
        this.props.updateTerm(term)
    }
    render(){
        return(
            <div className='search p-5'>
                <input onChange={this.updateTerm} value={this.state.term} type="text" className='form-control p-3' placeholder='Kinolarni qidirish' />
                <div className='d-flex gap-1'>
                <Btns />
                
                </div>
            </div>
        )
    }
}



export default Search