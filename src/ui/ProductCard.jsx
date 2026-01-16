export const ProductCard = ({ product }) => {
  return (
    <div className="group w-full rounded-xl h-80 m-auto hover:bg-gray-200 shadow-xl  hover:shadow-2xl hover:cursor-pointer">
      <div></div>
      <div className="h-full w-full px-5 pt-2">
        <div className="h-55 w-full overflow-hidden rounded-xl">
          <img
            src={product.image_path}
            className="w-full h-55 object-cover group-hover:scale-105 transition-transform duration-300"
            alt={product.name}
          />
        </div>

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
            <div className="btn btn-sm btn-outline font-semibold rounded-box text-sm  hover:bg-blue-300 hover:cursor-pointer py-4 flex items-center hover:shadow-2xl transition-colors duration-200 border-blue-300">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
