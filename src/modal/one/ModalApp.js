import Modal from "./Modal";
import useModal from "./useModal";
import "./ModalApp.css";

const ModalApp = () => {
  const { toggle, visible } = useModal();
  return (
    <div className="App">
      <button onClick={toggle}>Show Modal</button>
      <Modal visible={visible} toggle={toggle} />
    </div>
  );
};

export default ModalApp;
