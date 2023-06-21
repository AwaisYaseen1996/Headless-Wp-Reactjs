import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gray-100 h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to my Blog</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci error exercitationem molestias nostrum minima dolore! Nostrum unde, delectus dolorum voluptas distinctio amet voluptates? Sit, totam doloribus? Molestias, dolore quo!
          </p>
          <Link to="/posts" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out">
            Visit the Blog
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
