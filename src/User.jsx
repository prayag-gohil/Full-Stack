//passing prop parameter as object
/*export default function User(props) {
  return (
    <>
      <div>
        <hr/>
        <p>User name : {props.name}</p>
        <p>User Age : {props.age}</p>
      </div>
    </>
  );
}
*/
//another way
//Destructing (separate arguments for each value)
//default value of age is 18 if user is not give the value
export default function User({ name, age=18, hobbies }) {
  return (
    <>
      <div>
        <hr />
        <p>User name : {name}</p>
        <p>User Age : {age}</p>

        <ul>
          {hobbies.map((hb, index) => (
            <li key={index}>{hb}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
