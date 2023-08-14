import './App.css';
import PublicLayout from './layout/PublicLayout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <PublicLayout />
            <Footer />
        </div>
    );
}

export default App;
