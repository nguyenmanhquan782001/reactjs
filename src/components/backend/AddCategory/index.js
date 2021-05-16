import React from 'react'
import { useForm } from "react-hook-form"; 
import { useHistory } from "react-router-dom" ; 

const AddCategory = (props) => { 
      let history = useHistory () ; 
    const { register, handleSubmit, watch,  formState: { errors } } = useForm();
    const onSubmit = (data) => {
       props.onAdd(data);  
      history.push ("/admin/list-category") ; 
    }
    return (
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input 
                            type="text"       
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Tên danh mục"   
                            {...register('name' , { required: true })}          
                        />
                        <p style = {{ color :"red"}}>{errors.name && "Last name is required"}</p>
                      

                       
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

            <div className="col-2">

            </div>
        </div>
    )
}

export default AddCategory

