import { useWishlist } from "../../providers/WishlistContext";
import { Link } from "react-router";
import { X } from "lucide-react";
import empty from "../../assets/empty.png";

export const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="xl:max-w-6xl max-w-11/12 min-h-screen m-auto my-10">
      <div className="pb-4 text-center flex flex-col gap-3 mb-5">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-slate-800 ">
          Wishlist
        </h1>
        <p className="text-slate-500 text-lg">
          Save your favorite pieces now, decide later.
        </p>
      </div>
      {wishlistItems.length !== 0 ? (
        <div>
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 bg-white mb-2 rounded-2xl shadow-sm hover:scale-101 transition-all duration-300 group"
            >
              <div className="flex">
                <div className="w-25 h-25 rounded-md overflow-hidden mr-3 shrink-0">
                  <img
                    src={item.image_path}
                    className="h-full w-full object-cover"
                  ></img>
                </div>
                <div className="flex flex-col gap-2 flex-wrap">
                  <Link
                    to={`/products/${item.sku}`}
                    state={item}
                    className="text-sm md:text-base font-medium flex text-slate-800 group-hover:text-blue-400 hover:link transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                  <div className="flex flex-wrap gap-1">
                    <div className="text-slate-700 capitalize bg-blue-200 rounded-xl px-2 py-1 text-xs font-semibold">
                      {item.wood_type}
                    </div>
                    <div className=" text-slate-700 capitalize bg-stone-300 rounded-xl px-2 py-1 text-xs font-semibold">
                      {item.finish} finish
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="font-medium text-slate-800 line-through decoration-slate-600 decoration-1">
                      ${item.price}
                    </div>
                    <div className="font-medium text-slate-900 ">
                      ${item.discount_price}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="btn btn-ghost hover:bg-slate-300 btn-xs btn-circle"
                onClick={() => {
                  removeFromWishlist(item);
                }}
              >
                <X />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex mx-auto w-full sm:w-100 justify-center">
          <img src={empty} className="w-full h-full object-cover"></img>
        </div>
      )}
    </div>
  );
};
