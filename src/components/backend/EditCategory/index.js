import React from 'react' 

import { useForm } from "react-hook-form" ;  
import { useHistory} from "react-router-dom" ; 




const EditCategory = ({category , onUp}) => {    
    console.log("cate" , category) ; 

  let history = useHistory() ; 

    const { register, handleSubmit, watch,  formState: { errors } } = useForm();  
    const update = (categorys) => { 
        const update = {
            ...category ,  
            ...categorys

        } 
        onUp(update) ;  
        history.push("/admin/list-category") ; 



    }
   

    return (
     <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <form action="" onSubmit = {handleSubmit(update)}  >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input 
                            type="text"       
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Tên danh mục"    
                            defaultValue = {category.name}
                            {...register('name' , { required: true })}          
                        />
                        <p style = {{ color :"red"}}>{errors.name && "Last name is required"}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>

            </div>

            <div className="col-2">

            </div>
        </div>
    )
}

export default EditCategory
