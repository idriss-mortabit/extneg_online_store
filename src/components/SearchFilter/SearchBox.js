import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchTermToFilter} from "../../actions";
import './searchbar.css';
import './../../fonts/font-awesome-4.7.0/css/font-awesome.min.css';

const SearchBox = (props) => {

    const {dispatch} = props;
    const handleSearch = (e) => {
        const value = e.target.value;
        if(value === undefined) {
            dispatch(searchTermToFilter(""));
        } else {
            dispatch(searchTermToFilter(value));
        }
    };

        return (
            <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                    <input className="search_input" onChange={handleSearch} type="text" name="" placeholder="Search..." />
                    <a className="search_icon"><i className="fa fa-search"></i></a>
                </div>
            </div>
        </div>
        );
    }
const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};
export default connect(mapStateToProps)(SearchBox);
