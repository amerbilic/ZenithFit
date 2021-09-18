import "./modal.styles.scss";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className="backdrop">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
     <Backdrop></Backdrop>
    </Fragment>
  );
};

export default Modal;
