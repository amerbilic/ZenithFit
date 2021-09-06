import "./form-input.styles.scss";

const FormInput = (props) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
        {props.label ? (
          <label
            className={`${props.value.length ? "shrink" : ""} form-input-label`}
          >
            {props.label}
          </label>
        ) : null}
    </div>
  );
};

export default FormInput;
