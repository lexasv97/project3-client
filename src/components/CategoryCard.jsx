import { Link } from "react-router-dom";

const CategoryCard = ({ service, services }) => {
    return (
        <Link to={`/services/category/${service.toLowerCase()}`}>
            <li className="flex justify-center py-4 border-t border-b border-slate-800 hover:bg-indigo-200">
                {service}
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