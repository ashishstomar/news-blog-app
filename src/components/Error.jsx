import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="text-xl text-white sm:text-2xl md:text-4xl lg:text-6xl font-semibold h-screen flex flex-col gap-4 justify-center items-center">
      ⚠️ OOPS! {`${err.status} ${err.statusText} ⛓️‍💥💀`}
      <Link to="/">
        <button className="bg-violet-600 text-white border px-6 py-2 text-xl rounded-2xl">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
