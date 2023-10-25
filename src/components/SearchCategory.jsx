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
            <div>
                <SearchList className="font-xl" filteredServices={filteredServices} />
            </div>
        )
    }

    return (
        <section>
            <div className="flex items-center justify-center by-2 border-b border-slate-800">
                <input className="w-1/2 border border-slate-600 py-2 rounded-3xl px-2 mb-2"
                    placeholder="Search for..."
                    type="text"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </section>
    )
}

export default SearchCategory