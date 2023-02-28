import "./styles.css";

const Visor = ({ data, displayValue }) => {
  return (
    <div className="container-Visor">
      <p>{data.length === 0 ? displayValue : data}</p>
    </div>
  );
};
export default Visor;
