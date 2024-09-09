import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToTestingPage = () => {
    navigate("/testing");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a sample Home page component.</p>
      <button onClick={goToTestingPage}>Go to Testing Page</button>
    </div>
  );
};

export default Home;
