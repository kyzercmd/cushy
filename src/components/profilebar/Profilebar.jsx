import { Link } from "react-router";
import { UserAuth } from "../../providers/AuthContext";
// import { auth } from "../../firebase/firebase";

export const Profilebar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();

      user ? console.log("user") : console.log("no");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="border p-2 bg-[#021431]">
        <div className="flex justify-end max-w-11/12">
          {user ? (
            <div>
              <span className="hover:link text-slate-300 text-sm mr-5">
                Welcome, {user.displayName || user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="hover:link text-slate-300 text-sm"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="hover:link text-slate-300 text-sm mr-5"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="hover:link text-slate-300 text-sm"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
