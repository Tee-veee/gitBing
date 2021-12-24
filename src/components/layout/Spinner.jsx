import greenSpinner from "./assets/greenSpinner.gif";

function Spinner() {
  return (
    <div className="w-120 mt-20">
      <img
        src={greenSpinner}
        width={180}
        className="justify-center"
        alt="Loading.."
      />
    </div>
  );
}

export default Spinner;
