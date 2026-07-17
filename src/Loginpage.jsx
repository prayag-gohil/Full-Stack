import  Button  from 'react-bootstrap/Button';
export default function Loginpage() {
  return (
    <>
    
      <div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Menu</a>
            <a class="navbar-brand" href="#">About</a>
            <a class="navbar-brand" href="#">Contact</a>
        </nav>
        <div class="bg-primary text-white p-3">
        <h1>Login Page</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder='Username' />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder='Password' />
        <br /><br />
        <Button class="btn btn-success">Login</Button>
        </div>
      </div>
    </>
  );
}