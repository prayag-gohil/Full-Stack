export default function Header() {
  return (
    <>
    <div class="bg-gray-900 text-white p-4">
        <nav class="flex justify-center space-x-4">
            <h3 class="text-2xl font-bold">BrandLogo</h3>
            <a href="/dashboard" class="text-decoration-none font-bold rounded-lg px-3 py-2 text-gray-700 ">
                Home
            </a>
            <a href="/team" class="text-decoration-none font-bold rounded-lg px-3 py-2 text-gray-700 ">
                Team
            </a>
            <a href="/projects" class="text-decoration-none font-bold rounded-lg px-3 py-2 text-gray-700 ">
                Projects
            </a>
            <a href="/reports" class="text-decoration-none font-bold rounded-lg px-3 py-2 text-gray-700 ">
                Reports
            </a>
            <button class="btn-primary">Get Started</button>
        </nav>
        
    </div>
    </>
  );
}