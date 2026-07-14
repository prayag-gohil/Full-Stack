// looping using map()
// array of object , array
export default function Loop()
{
 //array
const user=["abc","xyz","jkl","pqr","lmn"];
const user_data=[
    {'id':101,"name":"abc","age":20},
    {'id':102,"name":"xyz","age":21},
    {'id':103,"name":"pqr","age":22},
];
    return(
        <>
        <ol>
            {user.map((element,index)=>(
                <li key={index}>{element}</li>
            ))}
        </ol>

        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {user_data.map((element)=>(
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}