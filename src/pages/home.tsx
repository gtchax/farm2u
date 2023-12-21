import Hero from "../components/hero";
// import Layout from "../components/layout";
import Navbar from "../components/nav";

const Home = () => {
  return (
    <section className="z-0 relative bg-cover bg-no-repeat bg-wheat w-screen h-screen after:bg-gradient-to-b after:from-[#fff9e6] after:to-transparent after:absolute after:top-0 after:w-full after:left-0 after:bottom-0">
      <div className="mb-5 fixed z-50 bg-[#fff9e6] top-0 left-0 w-full flex items-center justify-center">
        <Navbar />
      </div>
    
      <Hero />
    </section>
    // <Layout>
    //   <div className="mt-16">

    //   </div>
    //   <p>the home page</p>
    // </Layout>

    // <Layout>
    //   <Hero />
    // </Layout>
  );
};

export default Home;
