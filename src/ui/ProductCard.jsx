export const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-xl h-80 m-auto  shadow-xl  hover:shadow-2xl ">
      <div className="h-full w-full px-5 pt-2">
        <img
          src={product.image_path}
          className="rounded-xl w-full h-55 object-center"
          alt={product.name}
        />
        <div className="md:text-base text-sm text-[#394E6A] font-normal">
          {product.name}
        </div>
        <div className="flex pl-2 justify-between mt-2">
          <div className="flex flex-row gap-2">
            <div className="text-indigo-900 pt-2 text-base font-semibold line-through decoration-red-800 decoration-2">
              {product.price}
            </div>
            <div className="text-indigo-900 pt-2 text-lg font-semibold">
              {product.discount_price}
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-1">
            <div className=" text-black font-semibold rounded-lg text-sm border-gray-400 hover:bg-gray-200 hover:cursor-pointer border px-1 flex items-center">
              Buy now
            </div>
            <div className="text-black font-semibold rounded-lg text-sm border-gray-400 hover:bg-gray-200 hover:cursor-pointer border px-1 md:flex items-center hidden">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
