import './App.css'
import BlogItem from './components/BlogItem/BlogItem';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <Footer/>
    </>
  );
};

export default App;
