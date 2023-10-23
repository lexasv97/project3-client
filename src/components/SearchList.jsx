import CategoryCard from "./CategoryCards"

const SearchList = ({ filteredServices }) => {

    function noDuplicates(arr) {
        return Array.from(new Set(arr.map(el => el.category)))
     }

    return (
        <div>
            {noDuplicates(filteredServices).map(service => <CategoryCard key={service._id} service={service} services={filteredServices} />)}
        </div>
    )
}

export default SearchList