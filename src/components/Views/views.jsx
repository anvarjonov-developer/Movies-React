import './views.css'
import List from '../list/list'
function Views({data, onDelete, onToggleProp}){
    return(
            <ul className='views'>
            {data.map(({title, viewers, favourite, id, like})=>{
                return(
                    <List onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} onDelete={()=> onDelete(id)} like={like} key={id} favourite={favourite} title={title} viewers={viewers} />
                )
            })}
            </ul>
    )
}

export default Views