import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/services/category/${category.toLowerCase()}`}>
            <li className="flex justify-center py-4 border-b border-slate-800 hover:bg-indigo-200">
                {category.replace('-', ' ')}
            </li>
        </Link>
    );
}

export default CategoryCard;

// import { Link } from "react-router-dom";

// const CategoryCard = ({ service, services }) => {

//     return (
//         <>
            
//             {
//                 services.length ? 
            
//                 services.filter((el) => el.category === service).map((element) => {
//                     return (
//                         <Link to={`/services/${element._id}`}>
//                             <li className="flex justify-center py-4 border-t border-b border-slate-800 hover:bg-indigo-200">
//                                 {element.name}
//                             </li>
//                         </Link>
//                     );
//                 })
//                 : <p>Loading...</p>
//             }
            
//         </>


//     )
// }

// export default CategoryCard;