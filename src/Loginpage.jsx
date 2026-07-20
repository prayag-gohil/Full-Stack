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
        <Button class="btn btn-warning">Login</Button>
        </div>
      </div>
     {/* 
    <ul  role="list" class="list-disc marker:text-sky-400 ...">
  <li class="font-sans">5 cups chopped Porcini mushrooms</li>
  <li class="text-xl">1/2 cup of olive oil</li>
  <li class="font-stretch-extra-expanded">3lb of celery</li>
</ul>

<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>

<button class="btn-primary">Save Button </button>
<p class="lowercase center">Hello, World!</p>
   */} </>
  );
}