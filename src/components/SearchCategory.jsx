import { useState } from "react"
import SearchList from "./SearchList"

const SearchCategory = ({ allServices }) => {

    const [searchField, setSearchField] = useState('')

    const filteredServices = allServices.filter(
        service => {
            return (
                service
                    .category
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    )

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const searchList = () => {
        return (
            <div style={{overflowY: 'scroll'}}>
                <SearchList filteredServices={filteredServices} />
            </div>
        )
    }

    return (
        <section>
            <div className="flex items-center justify-center my-2 justify-evenly">
                <input className="w-1/2 border border-slate-600 py-2 rounded-3xl"
                    placeholder="  Search"
                    type="text"
                    onChange={handleChange}
                />
                <div className="bg-amber-500 text-white flex justify-center w-1/4 py-2 border border-slate-600 rounded-3xl">
                    <button type="submit"><span className="hover:text-black transition cursor-pointer">Search</span></button>
                </div>
            </div>
            {searchList()}
        </section>
    )
}

export default SearchCategory