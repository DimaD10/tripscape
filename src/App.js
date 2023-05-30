//import logo from './logo.svg';
import './App.scss';
import './null.scss';
import Main from './components/main/content.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
