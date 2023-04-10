import p6 from "../images/p6.png"
const Product6 = () => {
    return (
      <div className="text-center">
        <img src={p6} alt="pizza" width={200} />
        <h2 className="font-bold">Paneer</h2>
        <span className="rounded-full bg-gray-200  px-3">Large</span>
  
        <div className="flex justify-between py-1 px-4">
          <span className="font-bold">₹-999</span>
          <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
            Add
          </button>
        </div>
      </div>
    );
  };
  
  export default Product6; 
  