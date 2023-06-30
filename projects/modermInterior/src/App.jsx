import profile from "./assets/images/profile_image.png";
const App = () => {
  return (
    <main className="min-h-screen bg-gray-900 px-10">
      <nav className="flex justify-between pt-8">
        <span className="text-gray-100 border border-gray-100 p-2 uppercase px-6">
          This interior
        </span>
        <div className="w-1/2 md:w-1/3 justify-between hidden sm:flex">
          <a
            href="#"
            className="text-gray-100 hover:border-b-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-100 hover:border-b-2"
          >
            Collection
          </a>
          <a
            href="#"
            className="text-gray-100 hover:border-b-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-100 hover:border-b-2"
          >
            Contact
          </a>
        </div>
      </nav>
      <section className="flex flex-col sm:flex-row h-[80vh] pt-12">
        <div className="flex flex-1 h-90">
          <h2 className="text-gray-100 mt-8 text-4xl">Modern interior</h2>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque
            quasi exercitationem non accusantium dolor. Cum facere veniam
            maiores facilis. Consectetur, deleniti odit quo obcaecati inventore
            minus ex maxime ipsa!
          </p>
          <a
            href="#"
            className="text-gray-100"
          >
            Read more
          </a>
        </div>
        <div className="relative flex-1 bg-hero-img bg-center bg-cover">
          <div className="h-30 absolute -bottom-20 right-5 bg-gray-900 w-1/2 p-5 flex flex-col flex-wrap shadow-2xl">
            <div className="flex items-center">
              <img
                className="rounded-full"
                src={profile}
                alt="profile"
                width="50px"
              />
              <div className="flex pl-4 flex-col">
                <span className="text-gray-100 text-sm">Aliza Webber</span>
                <span className="text-gray-100 text-sm">Interior designer</span>
              </div>
            </div>

            <span className="text-gray-100 text-2xl pt-2 font-bold">
              Designed in 2020 by Aliza Webber
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
