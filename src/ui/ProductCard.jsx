export const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-xl h-80 m-auto hover:bg-gray-100 shadow-xl  hover:shadow-2xl hover:cursor-pointer">
      <div className="h-full w-full px-5 pt-2">
        <img
          src={product.image_path}
          className="rounded-xl w-full h-55 object-cover"
          alt={product.name}
        />
        <div className="md:text-base text-sm text-[#394E6A] font-normal">
          {product.name}
        </div>
        <div className="flex pl-2 justify-between mt-2">
          <div className="flex flex-row gap-2">
            <div className="text-indigo-900 pt-2 text-base font-semibold line-through decoration-red-800 decoration-1">
              ${product.price}
            </div>
            <div className="text-indigo-900 pt-2 text-lg font-semibold">
              ${product.discount_price}
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-1">
            <div className="text-slate-200 font-semibold rounded-box text-sm  bg-slate-500 hover:cursor-pointer px-2 py-2 flex items-center hover:shadow-2xl hover:bg-slate-800 ">
              Add to Cart +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
