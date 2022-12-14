import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Cards_mock from "../mocks/db.json";
import "../../src/temp.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <Cards cards={Cards_mock.products} />
      <Footer />
    </>
  );
};

export default HomePage;
