import React, { useRef, useState } from 'react'

const Search = (props) => {
    const { onSubmit } = props;
    const timeoutRef = useRef(null);
    const [search, setSearch] = useState('');
    const onHandleChange = (e) => { 
        const value =  e.target.value
        setSearch(value)
        if (!onSubmit) {
            return;
        } 
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            const formValues = {
                search: value
            };
            onSubmit(formValues)
        }, 500);
        ;
    }
    return (
        <div>
            <form>
                <input type="text"

                    name="search"

                    placeholder="Search"
                    value={search}
                    onChange={onHandleChange}

                />
            </form>
        </div>
    )
}

export default Search;


