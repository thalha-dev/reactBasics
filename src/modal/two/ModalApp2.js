import NoPortalExample from "./NoPortalExample";
import PortalExample from "./PortalExample";
import "./ModalApp2.css";

export default function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}
