import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid"; 
import firebase from "../../../firebare" ; 
const AddProduct = (props) => {
    let history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => { 
        let file = data.avatar[0] ;  
        let storageRef = firebase.storage().ref(`avatar/${file.name}`) ; 
        storageRef.put(file).then(function() {
            storageRef.getDownloadURL().then((url) => {
                const newProduct = {
                    id : uuidv4 , 
                    ...data , 
                    avatar : url 
                } 
                props.onAddPro(newProduct); 
                alert("Thêm sản pham thanh cong") ; 
                setTimeout( () => {
                    history.push("/admin/list-product");
                } , 500 )
               
            })
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <h4 style={{ textAlign: 'center' }}>Thêm mới 1 sản phẩm</h4>

                </div>
                <div className="col-3">

                </div>
            </div>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <form action="" onSubmit={handleSubmit(onSubmit)}  >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                            <input
                                type="text"
                                className="form-control"

                                aria-describedby="emailHelp"
                                placeholder="Tên danh mục"
                                {...register('name', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.name && "Chưa nhập tên sản phẩm"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                            <input
                                type="number"
                                className="form-control"

                                aria-describedby="emailHelp"
                                placeholder="Giá sản phẩm"
                                {...register('price', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.price && "Sản phẩm cần phải có giá"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Số lượng ( tồn kho )</label>
                            <input
                                type="number"
                                className="form-control"

                                aria-describedby="emailHelp"
                                placeholder="Số lượng sản phẩm"
                                {...register('quantity', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.price && "Số lượng tồn kho chưa có"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Hình ảnh sản phẩm</label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Hình ảnh"
                                {...register('avatar', { required: true })} 
                                
                            />
                            <p style={{ color: "red" }}>{errors.avatar && "Chưa có ảnh bạn êi"}</p>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Danh mục sản phẩm</label>
                            <select
                                {...register('categoryId', { required: true })}
                                className="form-control" id="exampleFormControlSelect1">
                                {
                                    props.category.map((category, index) => {
                                        return (
                                            <option key={index} value={category.id}>{category.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mô tả chi tiết sản phẩm</label>
                            <textarea
                                {...register('desc', { required: true })}
                            ></textarea>
                            <p style={{ color: "red" }}>{errors.desc && "Chưa có mô tả sản phẩm"}</p>
                        </div>

                        <button type="submit"  className="btn btn-primary">Submit</button>
                    </form>

                </div>

                <div className="col-2">

                </div>
            </div>

        </>
    )
}

export default AddProduct
