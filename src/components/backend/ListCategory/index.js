import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ListCategory = (props) => {
    return (
        <>
            <tr>
                <td>
                    {props.category.id}
                </td>

                <td>
                    {props.category.name}
                </td>
                <td >
                    <button className="btn btn-danger" onClick={() => props.onRemove(props.category.id)}>
                        Xóa
                   </button>
                    <Link style = {{height:40 , marginLeft :20}} className="btn btn-info" to={`/admin/edit-category/${props.category.id}`}  >Sửa</Link>

                </td>


            </tr>

        </>
    )
}

export default ListCategory
