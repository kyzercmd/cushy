export const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white w-80 rounded-xl h-80 m-auto hover:bg-gray-50 shadow-sm  hover:shadow-2xl hover:cursor-pointer transition-shadow duration-500">
      <div className="h-full w-full px-5 pt-2">
        <div className="flex">
          <div className="relative h-55 w-full overflow-hidden rounded-xl">
            <img
              src={product.image_path}
              className="w-full h-55 object-cover group-hover:scale-103 transition-transform duration-300"
              alt={product.name}
            />
          </div>
          <div className="absolute capitalize font-semibold text-sm text-[#f4f5c9] bg-[#141a20ce] rounded-2xl py-2 px-4 ml-2 mt-2">
            {product.wood_type}
          </div>
        </div>

        <div className="md:text-base text-sm text-[#394E6A] font-semibold mt-1 ml-2">
          {product.name}
        </div>

        <div className="flex ml-2 justify-between mt-1">
          <div className="flex flex-row gap-2">
            <div className="text-indigo-900 pt-2 text-base font-semibold line-through decoration-red-800 decoration-1">
              ${product.price}
            </div>
            <div className="text-indigo-900 pt-2 text-lg font-semibold">
              ${product.discount_price}
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-1">
            <div className="btn btn-sm btn-outline font-semibold rounded-box text-sm  hover:bg-[#021431] hover:cursor-pointer py-4 flex items-center hover:shadow-2xl  border-[#021431] hover:text-slate-200">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
