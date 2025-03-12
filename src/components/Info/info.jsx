import './info.css'

function Info({allMoviesCount,favMoviesCount}){
    return(
        <div className='font-monospace info p-5'>
            <p className='fs-2'>Barcha kinolar soni : {allMoviesCount}</p>
            <p className='fs-3'>Ko'rilgan kinolar soni : {favMoviesCount}</p>
        </div>
    )
}

export default Info