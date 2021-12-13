import react from "react";
const SearchBox =({value,onChange}) =>{
return(
   <input type="text"
   type="text"
   nama="query"
   className="form-control my-3"
   placeholder="Search..."
   value={value}
   onChange={e => onChange(e.currentTarget.value)} /> 
);
}
export default SearchBox;