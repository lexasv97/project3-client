import { useState, useEffect } from "react"
import { get } from "../services/authService"
import { Link } from "react-router-dom";
import SearchCategory from "../components/SearchCategory";


const AllCategories = ({ allServices }) => {

    return (
        <div className="bg-gradient-to-t from-white to-indigo-50">
            <div>
                <h1 className="text-3xl font-bold py-2 flex justify-center">All categories</h1>
            </div>
            <div>
                <SearchCategory allServices={allServices} />
            </div>
        </div>
    )
}

export default AllCategories