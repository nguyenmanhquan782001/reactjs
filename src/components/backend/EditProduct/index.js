import React, { Children } from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../firebare";
const EditProduct = (props) => {
    const { old, onUpdate } = props;
    console.log(old);
    const avatar = old.avatar;
    let history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let file = data.avatar[0];
        if (file) {
            let storageRef = firebase.storage().ref(`avatar/${file.name}`);
            console.log(storageRef);
            storageRef.put(file).then(() => {
                storageRef.getDownloadURL().then((avatar) => {
                    const update = {
                        ...old,
                        ...data,
                        avatar
                    }

                    onUpdate(update);
                    alert("Cập nhật sản phẩm thành công ? Xin chúc mừng");
                    setTimeout(() => {
                        history.push("/admin/list-product");
                    }, 500)


                })
            })
            console.log("1");
        }
        else {
            const update = {
                ...old,
                ...data,
                avatar
            }
            onUpdate(update);
            alert("Cập nhật sản phẩm thành công ? Xin chúc mừng");
                    setTimeout(() => {
                        history.push("/admin/list-product");
                    }, 500)
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <h4 style={{ textAlign: 'center' }}>Sửa sản phẩm</h4>
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
                                defaultValue={old.name}
                                aria-describedby="emailHelp"
                                placeholder="Tên sản phẩm"
                                {...register('name', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.name && "Chưa nhập tên sản phẩm"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                            <input
                                type="number"
                                className="form-control"

                                defaultValue={old.price}
                                aria-describedby="emailHelp"
                                placeholder="Giá sản phẩm"
                                {...register('price', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.price && "Chưa nhập giá"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Số lượng ( tồn kho )</label>
                            <input
                                type="number"
                                className="form-control"
                                defaultValue={old.quantity}
                                aria-describedby="emailHelp"
                                placeholder="Số lượng sản phẩm"
                                {...register('quantity', { required: true })}
                            />
                            <p style={{ color: "red" }}>{errors.price && "Chưa nhập số lượng"}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Hình ảnh sản phẩm</label>
                            <input

                                type="file"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Hình ảnh"
                                {...register('avatar')}
                            />
                            <p style={{ color: "red" }}>{errors.avatar && ""}</p>
                        </div>
                        <img src={old.avatar} width={150} />
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Danh mục sản phẩm</label>
                            <select
                                {...register('categoryId')}
                                className="form-control" id="exampleFormControlSelect1">
                                {
                                    props.category.map((category, index) => {
                                        var select = category.id == old.categoryId ? "selected" : "";

                                        return (
                                            <option key={index} value={category.id} selected={select}  >{category.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mô tả chi tiết sản phẩm</label>
                            <textarea defaultValue={old.desc}
                                {...register('desc', { required: true })}
                            ></textarea>
                            <p style={{ color: "red" }}>{errors.desc && "Chưa nhập mô tả"}</p>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>

                <div className="col-2">

                </div>
            </div>
        </>
    )
}

export default EditProduct
