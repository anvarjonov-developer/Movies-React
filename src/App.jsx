import { Component } from 'react'
import './App.css'
import Addlist from './components/AddList/addlist'
import Info from './components/Info/info'
import Search from './components/search-panel/search'
import Views from './components/Views/views'
import { v4 as uuidv4 } from 'uuid';




class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
               {title : "Empire of Osman", viewers : 970, favourite: true, id : 1,  favourite : false, like : false},
               {title : "Umar Ibn Hattob", viewers : 670,  favourite: false, id:2,  favourite : false, like : false},
               {title : "Ertugrul", viewers : 989,  favourite: false, id:3,  favourite : false, like : false},
           ],
           term : ''
           
        }
    }
    
    
    onDelete = (id)=>{
        console.log(id);
        
       this.setState(({data})=>{
        return {
            data : data.filter((c)=> c.id !== id)
        }
       })
    }


    addForm = (item)=>{
        const newItem = {title : item.title, viewers : item.viewers, id : uuidv4(), favourite : false, like : false}
        this.setState(({data})=>({
            data :[...data, newItem]
        }))
    }


    // onToggleFav = (id)=>{
    //     this.setState(({data})=>({
    //         data : data.map((item)=>{
    //             if(item.id == id){
    //                 return{...item, favourite : !item.favourite}
    //             }
    //             return item
    //         })
    //     }))
    // }
    // onToggleLike = (id)=>{
    //     this.setState(({data})=>({
    //         data : data.map((item)=>{
    //             if(item.id == id){
    //                 return{...item, like : !item.like}
    //             }
    //             return item
    //         })
    //     }))
    // }
    onToggleProp = (id,prop)=>{
        this.setState(({data})=>({
            data : data.map((item)=>{
                if(item.id == id){
                    return{...item, [prop] : !item[prop]}
                }
                return item
            })
        }))
    }


    searchHande = (arr, term)=>{
        if(term.length ===0){
            return arr

        }
        return arr.filter((item)=> item.title.toLowerCase().indexOf(term) > -1)
    }
    
    updateTerm = (term)=> this.setState({term})
  
    render(){
        const {data,term} = this.state
        const allMoviesCount = data.length
        const favMoviesCount = data.filter((c)=> c.favourite).length
        const visibleData = this.searchHande(data, term)
      return(
        <div>
            <Info favMoviesCount = {favMoviesCount} allMoviesCount={allMoviesCount} />
            <Search updateTerm={this.updateTerm} />
            <Views onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
            <Addlist addForm={this.addForm} />
        </div>
    )
    }
}

export default App