function App() {
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="investment">Initial Investment</label>
            <input type="text" placeholder="10000" />
          </p>

          <p>
            <label htmlFor="investment">Annual Investment</label>
            <input type="text" placeholder="300" />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label htmlFor="investment">Expected Return</label>
            <input type="text" placeholder="5,5" />
          </p>

          <p>
            <label htmlFor="investment">Duration</label>
            <input type="text" placeholder="12" />
          </p>
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>$10,850</td>
            <td>$550</td>
            <td>$550</td>
            <td>$10,300</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$11,747</td>
            <td>$597</td>
            <td>$1,147</td>
            <td>$10,600</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;
