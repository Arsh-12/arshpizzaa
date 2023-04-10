const Product2 =()=>{

    return(

        <div className="text-center">
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pizza" width={170} />
      <h2 className="font-bold">Pepperoni</h2>
      <span className="rounded-full bg-gray-200  px-3">Small</span>

      <div className="flex justify-between py-1 px-4">
        <span className="font-bold">₹-550</span>
        <button className="rounded-full bg-yellow-500 py-1 px-4 font-bold">
          Add
        </button>
      </div>
    </div>
    )

};
export default Product2 ;