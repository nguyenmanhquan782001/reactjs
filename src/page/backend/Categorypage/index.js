import React from 'react'
import ListCategory from '../../../components/backend/ListCategory' ; 
import {
    BrowserRouter as Router , 
    Link  
} from "react-router-dom" ;  
const Categorypage = (props) => {
    // console.log(props.data)
    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-3">

            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-4">
                        <h5>Danh sách danh mục</h5>
                    </div>
                    <div className="col-4">

                    </div>

                    <div className="col-4">
                      
                        <Link to = "/admin/add-category" className = "btn btn-warning"> 
                        Thêm danh mục
                        </Link>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                STT
                   </th>
                            <th>
                                Tên danh mục
                   </th>
                            <th>
                                Hành động
                   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((category, index) => {
                                return <ListCategory key={index} category={category}  onRemove = {props.onRemove} />
                            })
                        }
                    </tbody>
                </table>

            </div>

            <div className="col-3">

            </div>
        </div>
    )
}

export default Categorypage
