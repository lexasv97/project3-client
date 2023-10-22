import { useState, useEffect } from "react"
import { get } from "../services/authService"
import { Link } from "react-router-dom";
import SearchName from "../components/SearchName";

const AllCategories = ({ allServices }) => {

    // prevent dublicates
    function noDublicates(arr) {
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }

    return (
        <div>
            <SearchName allServices={allServices} />
        </div>
    )
}

export default AllCategories