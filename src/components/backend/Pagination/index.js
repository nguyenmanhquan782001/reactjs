import React from 'react'

const Pagination = (props) => { 
   

    const { pagination, onHandleChange } = props;
    const { _page , _limit , _totalRows } = pagination ; 
    const totalPage = Math.ceil(_totalRows / _limit) ; 

    const checkPage = (newPage) => { 
        if(onHandleChange) {
            onHandleChange(newPage) ; 
            
        }
       
    }
    return (
        <>
            <button 
            // disabled = {_page < 1} 
            onClick = { ()=>checkPage(_page - 1) }
            
            >Prev
            
            </button>

            <button 
            // disabled = {_page >= totalPage }
            onClick = { ()=>checkPage(_page  + 1) }
            >
                Next
                </button>

        </>
    )
}

export default Pagination
