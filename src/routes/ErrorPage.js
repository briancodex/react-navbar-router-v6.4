import { useRouteError } from "react-router-dom";
import "../App.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh noo!</h1>
      <p>This is an Error Page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
