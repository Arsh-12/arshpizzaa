
const Product4 = () => {
    return (
      <div className="text-center">
        <img sr="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png" alt="pizza" width={200} />
        <h2 className="font-bold">Margherita</h2>
        <span className="rounded-full bg-gray-200  px-3">Small</span>
  
        <div className="flex justify-between py-1 px-4">
          <span className="font-bold">₹-700</span>
          <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
            Add
          </button>
        </div>
      </div>
    );
  };
  
  export default Product4; 
  