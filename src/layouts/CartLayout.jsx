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
          <div className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded-xl justify-between items-center bg-slate-100 p-2"
                >
                  <div className="">
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="flex">
                      <div className="text-sm text-blue-800">
                        ${item.discount_price}
                      </div>
                      <div className="text-slate-600">x{item.quantity}</div>
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
                <span className="text-slate-800">Subtotal</span>
                <span className="text-blue-800">${subTotal}</span>
              </div>
              <button className="btn btn-ghost bg-slate-900 hover:bg-slate-800 text-slate-200 btn-block">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
