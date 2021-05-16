import React from 'react' 
import AddCategory from '../../../components/backend/AddCategory'

const AddCategorypage = (props) => { 

    return (
        <> 
              <AddCategory  onAdd = {props.onAdd} />
        </>
    )
}

export default AddCategorypage
