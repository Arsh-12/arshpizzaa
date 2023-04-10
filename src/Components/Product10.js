import p2 from "../images/p2.png"
const Product10 = () => {
    return (
      <div className="text-center">
        <img src={p2} alt="pizza" width={200} />
        <h2 className="font-bold">Pepperoni</h2>
        <span className="rounded-full bg-gray-200  px-3">Large</span>
  
        <div className="flex justify-between py-1 px-4">
          <span className="font-bold">₹-800</span>
          <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
            Add
          </button>
        </div>
      </div>
    );
  };
  
  export default Product10; 
  