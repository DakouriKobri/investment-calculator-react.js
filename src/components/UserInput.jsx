export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input type="number" required aria-required placeholder="10000" />
        </p>

        <p>
          <label htmlFor="investment">Annual Investment</label>
          <input type="number" required aria-required placeholder="300" />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="investment">Expected Return</label>
          <input type="number" required aria-required placeholder="5,5" />
        </p>

        <p>
          <label htmlFor="investment">Duration</label>
          <input type="number" required aria-required placeholder="12" />
        </p>
      </div>
    </section>
  );
}
