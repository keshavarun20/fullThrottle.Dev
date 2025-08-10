import './App.css'
import BlogItem from './components/BlogItem/BlogItem';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className='page-container'>
      <Header />
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <Footer/>
    </div>
  );
};

export default App;
