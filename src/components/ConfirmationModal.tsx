import classes from "./ConfirmationModal.module.css";

const ConfirmationModal: React.FC<{
  title: string;
  msg: string;
  onConfirm: () => void;
  onCancel: () => void;
}> = (props) => {
  return (
    <div className={classes.container}>
      {props.title && <div className={classes.title}>{props.title}</div>}
      {props.msg && <div className={classes.msg}>{props.msg}</div>}

      <div className={classes.btngroup}>
        <button className={classes.confirm} onClick={() => props.onConfirm()}>
          Confirm
        </button>
        <button className={classes.close} onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
