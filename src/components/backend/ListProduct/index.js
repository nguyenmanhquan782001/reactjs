import React from 'react' 
import {
    BrowserRouter as Router , 
    Link
 } from "react-router-dom" ;  


const ListProduct = (props) => { 
 
    return (
        <tr>
                <td>
                    {props.stt }
                </td>

                <td>
                    {props.product.name}
                </td> 
               
                <td>
                    {props.product.price}
                </td> 
                <td>
                    {props.product.quantity}
                </td> 
                <td> 
                    <img src =   {props.product.avatar} width = {100} />
                  
                </td>  
                <td >
                    <button className="btn btn-danger" onClick = {()=> props.onDelete(props.product.id) }>
                        Xóa
                   </button>
                    <Link style = {{height:40 , marginLeft :20}} to = { `/admin/edit-product/${props.product.id}` } className="btn btn-info">Sửa</Link>

                </td>

            </tr>
    )
}

export default ListProduct
