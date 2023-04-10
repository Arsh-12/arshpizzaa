import ProductsList from "../Components/ProductsList";
import Pizza from "../images/Pizza.png"

const Home = () => {
  return (
    <>
    <div className="hero py-16" >
      <div id="main" className="container mx-auto flex items-center justify-between px-0 py-0">
        <div className="w-1/2" style={{marginLeft:50}}>
          <h6 className="text-lg">
            <em>Are you hungry?</em>
          </h6>
          <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
          <button className=" bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-full  font-bold mt-4">
            order now
          </button>
        </div>

        <div style={{marginTop:30 , marginRight:50}}>

            <img width={450} src={Pizza} alt="Pizza-Image"></img>
        </div>
      </div>
    </div>
    <div>
        <ProductsList/>
    </div>
    </>
  );
};
export default Home;
