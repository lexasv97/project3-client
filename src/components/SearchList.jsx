import CategoryCard from "./CategoryCard"

const SearchList = ({ filteredServices }) => {

    function noDuplicates(arr) {
        return Array.from(new Set(arr.map(el => el.category)))
     }

    return (
        <div>
            {noDuplicates(filteredServices).slice(0,10).map(category => <CategoryCard key={category._id} category={category} />)}
        </div>
    )
}

export default SearchList