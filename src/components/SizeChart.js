import "./SizeChart.css";

export default function SizeChart({ onClose }) {
  return (
    <div className="sizechart-overlay">
      <div className="sizechart">
        <h3>Size Chart (in cm)</h3>

        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hips</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>XS</td><td>80</td><td>62</td><td>86</td></tr>
            <tr><td>S</td><td>84</td><td>66</td><td>90</td></tr>
            <tr><td>M</td><td>88</td><td>70</td><td>94</td></tr>
            <tr><td>L</td><td>92</td><td>74</td><td>98</td></tr>
            <tr><td>XL</td><td>96</td><td>78</td><td>102</td></tr>
          </tbody>
        </table>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
