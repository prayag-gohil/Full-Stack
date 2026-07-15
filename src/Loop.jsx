// looping using map()
// array of object , array
import {useState , useMemo} from "react";
export default function Loop()
{
 //array
const user=["abc","xyz","jkl","pqr","lmn"];

const [search, setSearch] = useState("");
//filtering data using filter method 
//filtering array of object based on condition
//const filtered = user_data.filter((element) => element.role.toLowerCase() === search.toLowerCase());
const filtered = useMemo(() =>{
    const user_data=[
    {'id':101,"name":"abc","age":20,"role":"admin"},
    {'id':102,"name":"xyz","age":21,"role":"developer"},
    {'id':103,"name":"pqr","age":22,"role":"ceo"},
];
    return user_data.filter((element) => element.role.toLowerCase() === search.toLowerCase());
   // other way return user_data.filter((element) => element.role.toLowerCase().includes(search.toLowerCase()));
},[search]);
    return(
        <>
         <ol>
            {user.map((element,index)=>(
                <li key={index}>{element}</li>
            ))}
        </ol>

        <input type="text" name="search" placeholder="search role" value={search} onChange={(e)=>setSearch(e.target.value)}/> 
        
        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Role</td>
                </tr>
            </thead>
            <tbody>
                {filtered.length > 0 ? (
                    filtered.map((element)=>(
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                            <td>{element.role}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No results found</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}







