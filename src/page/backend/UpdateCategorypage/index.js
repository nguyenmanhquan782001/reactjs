import React from 'react'
import EditCategory from '../../../components/backend/EditCategory'
import { useParams } from "react-router-dom" ;  

const UpdateCategorypage = ({data , onUpdate}) => {  

  const { id } = useParams() ;  
 
  const category = data.find(item => item.id == id) ; 
 

    return (
        <>
          <EditCategory category = {category} onUp = {onUpdate}  />
        </>
    )
}
export default UpdateCategorypage
