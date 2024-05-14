export default function Input({ label, value, changeHandler }) {
  return (
    <p>
      <label htmlFor="investment">{label}</label>
      <input
        type="number"
        required
        aria-required
        value={value}
        onChange={changeHandler}
      />
    </p>
  );
}
