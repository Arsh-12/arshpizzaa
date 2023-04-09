
const Product1 = () => {
  return (
    <div className="text-center">
      <img src="/images/Pizza.png" alt="pizza" width={170} />
      <h2 className="font-bold">Arsh's Special</h2>
      <span className="rounded-full bg-gray-200  px-3">Small</span>

      <div className="flex justify-between py-1 px-4">
        <span className="font-bold">₹-500</span>
        <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product1; 
