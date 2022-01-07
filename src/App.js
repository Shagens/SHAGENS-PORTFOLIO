import './App.css';
import Aboutme from './componets/aboutme';
import Header from './componets/header';
import Nav from './componets/nav';
import Footer from './componets/footer';
import Resume from './componets/resume';
import ContactForm from './componets/contact';
import Portfolio from './componets/portfolio';

// function Portfolio() {
//   // Using useState, set the default value for currentPage to 'Home'
//   const [currentPage, handlePageChange] = useState('Home');

//   // The renderPage method uses a switch statement to render the appropriate current page
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Aboutme':
//         return <Aboutme />;
//       case 'Portfolio':
//         return <portfolio />;
//       case 'ContactForm':
//         return <contactForm />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div>
//       {/* Pass the state value and the setter as props to NavTabs */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Call the renderPage function passing in the currentPage */}
//       <div>{renderPage(currentPage)}</div>
//     </div>
//   );
// }

function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <Aboutme/>
    <Portfolio/>
    <Resume/>
    <ContactForm/>
    <Footer/>
    </div>
    
  );
}

export default App;
