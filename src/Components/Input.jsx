export default function Input({
  dataId,
  inputLabel,
  defaultValue,
  handleInputChange,
}) {
  return (
    <p>
      <label htmlFor="user-input">{inputLabel}</label>
      <input
        type="number"
        data-id={dataId}
        defaultValue={defaultValue}
        onChange={handleInputChange}
        required
      />
    </p>
  );
}
