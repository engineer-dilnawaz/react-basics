import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>
        {error.status} - {error.statusText}
      </h1>
      <h2>Looks like you forgot your way</h2>
      <p>{error.data}</p>

      <button>Visit Home</button>
    </div>
  );
};

export default Error;
