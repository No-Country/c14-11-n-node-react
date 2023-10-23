import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, logout, loading } = useAuth();
console.log(user);
  const handleClick = async () => {
    await logout();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={handleClick}>Cerrar sesion</button>
      
    </div>
  );
};

export default Home;
