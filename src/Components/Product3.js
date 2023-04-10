import p3 from "../images/p3.png"
const Product3 = () => {
    return (
      <div className="text-center">
        <img src={p3} alt="pizza" width={200} />
        <h2 className="font-bold">Veggie</h2>
        <span className="rounded-full bg-gray-200  px-3">Large</span>
  
        <div className="flex justify-between py-1 px-4">
          <span className="font-bold">₹-850</span>
          <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
            Add
          </button>
        </div>
      </div>
    );
  };
  
  export default Product3; 
  