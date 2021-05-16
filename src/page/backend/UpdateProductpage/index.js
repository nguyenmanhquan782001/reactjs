import React from 'react' 
import  { useParams } from "react-router-dom" ; 
import EditProduct from '../../../components/backend/EditProduct';


const UpdateProductpage = (props) => {  
       const { id } = useParams() ; 
       console.log(id) ; 
       const product = props.data.find( pro => (pro.id == id)) ; 
       console.log(product) ;  
       return (
        <> 
         <EditProduct  old = {product}  onUpdate = { props.onUpdate} category =  { props.category}  />
            
        </>
    )
}

export default UpdateProductpage
