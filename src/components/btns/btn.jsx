import './btn'

function Btns({updateFil,filter}){
    return(
        <div className='mt-2 d-flex gap-1'>
            {btnsArr.map((btn)=>{
                return(
                
                    <button onClick={()=>updateFil(btn.name)} className={`btn rounded-0 ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} key={btn.name}>{btn.label}</button>
                )
            })}
        </div>
    )
}
const btnsArr = [
    {name: "all", label: "Barcha kinolar"},
    {name: "popular", label: "Mashhur kinolar"},
    {name: "mostView", label: "Eng ko'p ko'rilgan kinolar"}
]
export default Btns