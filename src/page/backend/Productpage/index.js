import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { set, useForm } from "react-hook-form";
import ListProduct from '../../../components/backend/ListProduct';
import Pagination from '../../../components/backend/Pagination';
import queryString from "query-string";
import Search from '../../../components/frontend/Search';

const Productpage = (props) => { 
    window.scrollTo(0,0)

    const [newProducts, setProduct] = useState([]);
    // const[search  , setSearch] = useState([]) ; 
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 4,
        _totalRows: 1,
    });

    const [filters, setFilters] = useState({
        _limit: 4,
        _page: 1,
        _sort: 'id',
        _order: 'desc',
        name_like : ''
    
    });
 

    useEffect(() => {
        const getProduct = async () => {
            // call API llay danh sach  
            try {
                const paramsString = queryString.stringify(filters);
                const response = await fetch(`http://localhost:3006/products?${paramsString}`);
                const responseJSON = await response.json();
                // console.log( {responseJSON} ) ; 
                setProduct(responseJSON);
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [filters]);

    const onHandlePage = (newPage) => {
      
        setFilters({
            ...filters,
            _page: newPage
        })
    }
    const onHandleChange = (e) => {
        const target = e.target;
        const name = target.value;
        if (name == "desc") {
            setFilters({
                ...filters,
                _sort: 'price' , 
                _order: name
            })
        }
        if (name == "asc") {
            setFilters({
                ...filters, 
                _sort:'price',    
                _order: name
            })
        }
    }
    const onHandle = (e) => {
        const target = e.target;
        const name = target.value;
        if (name == "op1") {
            const fil1 = async () => {
                try {
                    const response = await fetch(`http://localhost:3006/products?price_gte=1&price_lte=599`, {
                        method: "GET"
                    });
                    const product = await response.json();
                    setProduct(product);

                } catch (error) {
                    console.log(error)
                }
            }
            fil1();
        }
        if (name == "op2") {
            const fil1 = async () => {
                try {
                    const response = await fetch(`http://localhost:3006/products?price_gte=600&price_lte=999`, {
                        method: "GET"
                    });
                    const product = await response.json();
                    setProduct(product);

                } catch (error) {
                    console.log(error)

                }
            }
            fil1();
        }
    }
    const handleSubmitSearch = (news) => {
        console.log(news)  
        setFilters({
            ...filters , 
            name_like: news.search 

        })
    }
    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-1">
              
            </div>
            <div className="col-10">
                <div className="row">
                    <div className="col-2">
                        <h5>Danh s??ch </h5>
                    </div> 
                    <div className="col-2">
                    <Search onSubmit={handleSubmitSearch} />
                    </div>
                    
                    <div className="col-2">
                        <div className="form-group">
                            <select onChange={onHandleChange}
                                className="form-control"
                                id="exampleFormControlSelect1">
                                <option value=" "  >M???c ?????nh</option>
                                <option value="asc">Gi?? t??ng d???n</option>
                                <option value="desc">Gi?? gi???m d???n</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select onChange={onHandle}
                                className="form-control"
                                id="exampleFormControlSelect1">
                                <option value="" >L???c s???n ph???m</option>
                                <option value="op1">S???n ph???m d?????i 600</option>
                                <option value="op2">S???n ph???m tr??n 600</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <Link to="/admin/add-product" className="btn btn-warning">
                            Th??m s???n ph???m
                    </Link>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Id
               </th>
                            <th>
                                T??n s???n ph???m
               </th>
                            <th>
                                Gi?? s???n ph???m
               </th>
                            <th>
                                S??? l?????ng
               </th>
                            <th>
                                H??nh ???nh s???n ph???m
               </th>
                            <th>
                                H??nh ?????ng
               </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            newProducts.map((product, index) => {
                                return (  
                                    
                                    <ListProduct key={index} stt = {index} product={product} onDelete={props.onRemovePro} />
                                )    
                            })
                        }
                    </tbody>
                </table>
                <Pagination pagination={pagination} onHandleChange={onHandlePage} />
            </div>
            <div className="col-1">

            </div>
        </div>
    )
}

export default Productpage
