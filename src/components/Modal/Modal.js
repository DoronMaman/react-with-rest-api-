function Modal(props) {
  function cancleHandler() {
    props.onCancel();
  }
  function OkClick() {
    props.onOk();
  }
  return (
    <div className="modalBox">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancleHandler}>
        Cancel
      </button>
      <button className="btn" onClick={OkClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
