import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Home;
