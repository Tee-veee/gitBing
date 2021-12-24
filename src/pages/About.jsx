function About() {
  return (
    <div>
      <div>
        <h1 className=" text-3xl mb-6 md:text-5xl">GitBing</h1>
        <p className=" mb-6 text-xl md:text-4xl font-light ">
          This application gives you the ability to search githubs REST API for
          user data. This gives you the ability to view basic profile details
          and user repositories.
        </p>
        <p className=" mb-6 text-xl md:text-3xl font-thin ">
          GitBing was built with react.js utilising the tailwind.css framework.
          Features of code include Context API, Fetch API, React Router and
          React Hooks.
        </p>
        <p className="text-xl md:text-2xl mb-6 font-thin">
          Coded by <strong>Ty.Vile</strong>
        </p>
      </div>
      <div className="text-2xl">
        <button className="mb-2 hover:scale-95 hover:transition-all">
          <a
            href="https://github.com/Tee-veee"
            target="_blank"
            className="px-4 py-2 md:p-3 bg-mainColorDk rounded-md shadow-lg text-black "
            rel="noreferrer"
          >
            View my github
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
