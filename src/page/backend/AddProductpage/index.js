import React from 'react'
import AddProduct from '../../../components/backend/AddProduct'

const Addproductpage = (props) => {
    return (
        <div>
          <AddProduct  onAddPro = {props.onAddPro} category = {props.category} />
        </div>
    )
}

export default Addproductpage
