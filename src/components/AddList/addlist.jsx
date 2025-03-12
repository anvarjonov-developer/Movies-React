import AddInputs from '../addInputs/addinputs'
import './addlist.css'

function Addlist({addForm}){
    return(
        <div className='addlist p-5'>
            <h2>Yangi kino qo'shish</h2>
            <AddInputs addForm={addForm} />
        </div>
    )
}

export default Addlist