import './addinputs.css'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


class AddInputs extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            views : ''
        }
    }

    onChangeHande = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    addFormHande = (e)=>{
        e.preventDefault()
        this.props.addForm({title:this.state.name, viewers:this.state.views})
        this.setState({
            name : '',
            views : ''
        })

    }
    render(){
        const {name, views} = this.state
        return(

            <div className='d-flex'>
                <form onSubmit={this.addFormHande} className='d-flex w-100 gap-1'>
                <input value={name} onChange={this.onChangeHande} type="text" name='name' placeholder='Qanday Kino ?' className='form-control p-2' />
                <input value={views} name='views' onChange={this.onChangeHande} type="text" placeholder="Necha marotaba ko'rilgan ?" className='form-control p-2' />
                <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
                </form>
            </div>
        )
    }
   
}

export default AddInputs