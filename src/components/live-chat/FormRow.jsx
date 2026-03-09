import Error from './Error';

function FormRow({ label, error, children }) {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={children.props.id} className="form-label">
          {label}
        </label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;
