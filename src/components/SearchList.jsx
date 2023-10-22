import CategoryCard from "./CategoryCards"

const SearchList = ({ filteredServices }) => {
    return (
        <div>
            {filteredServices.map(service => <CategoryCard key={service._id} service={service} />)}
        </div>
    )
}

export default SearchList