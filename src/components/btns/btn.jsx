import './btn'

function Btns(){
    return(
        <div className='mt-2 d-flex gap-1'>
            {btnsArr.map((btn)=>{
                return(
                
                    <button className='btn btn-dark rounded-0' key={btn.name}>{btn.label}</button>
                )
            })}
        </div>
    )
}
const btnsArr = [
    {name: "all", label: "Barcha kinolar"},
    {name: "popular", label: "Mashhur kinolar"},
    {name: "mostView", label: "Eng ko'p ko'rilgan kinolar kinolar"}
]
export default Btns