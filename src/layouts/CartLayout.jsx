import { useCart } from "../providers/CartContext";
import { X } from "lucide-react";

export const CartLayout = ({ children }) => {
  const { cartItems, removeFromCart, subTotal } = useCart();

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 min-h-full w-72 md:w-90 p-3">
            {/* Sidebar content here */}

            <div className="flex-1 overflow-y-auto flex-col gap-2 font-[inter]">
              <span className="p-3">YOUR CART</span>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 border-b border-slate-300"
                >
                  <div className="flex flex-wrap">
                    <div className="w-16 h-16 rounded-md overflow-hidden mr-3">
                      <img
                        src={item.image_path}
                        className="h-full w-full object-cover"
                      ></img>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm flex flex-wrap">{item.name}</div>
                      <div className="flex">
                        <div className="text-slate-600">{item.quantity}</div>
                        <div className="mx-1 text-slate-600">x</div>
                        <div className="font-medium text-slate-800 ">
                          ${item.discount_price || item.price}.00
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="btn btn-ghost hover:bg-slate-300 btn-xs btn-circle"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    <X />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-300 pt-4 mt-auto">
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span className="text-slate-700 text-base">Subtotal:</span>
                <span className="text-blue-900 text-base">${subTotal}.00</span>
              </div>
              <button className="btn btn-ghost text-sm font-normal bg-slate-900 hover:bg-slate-800 text-slate-200 btn-block">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
