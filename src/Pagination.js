function Pagination({totalPost,setcurrentPage,totalpage,currentPage}){

    let pages=[];

    for(let i=1; i<=Math.ceil(totalPost/totalpage); i++){
        pages.push(i)
    }


  
    return(
        <div className="pagebtn">
                {
                    pages.map((page,index)=>{
                        return(
                            <button key={index} onClick={()=>setcurrentPage(page)}  className={page===currentPage ? 'active':''}>
                                {page}
                            </button>
                        )
                    })
                }
        </div>
    )
}

export default Pagination;