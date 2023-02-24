import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <p>
        Go to the <Link to="/">Home page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
