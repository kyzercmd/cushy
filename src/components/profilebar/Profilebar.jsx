import { Link } from "react-router-dom";

export const Profilebar = () => {
  return (
    <>
      <div className="border p-2 bg-[#021431]">
        <div className="flex justify-end max-w-11/12">
          <Link to="/login" className="hover:link text-slate-300 text-sm mr-5">
            Sign in / Guest
          </Link>
          <a className="hover:link text-slate-300 text-sm">Create Account</a>
        </div>
      </div>
    </>
  );
};
