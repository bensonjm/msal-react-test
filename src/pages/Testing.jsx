import { useNavigate } from "react-router-dom";

const Testing = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Replace '/' with the desired home route
  };

  return (
    <div>
      <div>TEST!!!!!</div>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default Testing;
