import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Footer from './components/footer';
import ArtisticInnovations from './components/artisticinnovations';
import Murals from './components/murals';
import CommercialWindowArt from './components/commercialwindowart';
import Custom from './components/customandcommercial';
import ContactInfo from './components/contact';
import Divider from '@mui/material/Divider';
import NotFound from './components/NotFound';
import LoadingScreen from './components/LoadingScreen';
import { useLocation } from 'react-router-dom';


const styles = {
  container: {
    minHeight: "auto",
    minWidth: "auto",
    position: "relative",
    overflow: "hidden",

  },
  hero: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '39vh',
  },
  navBarContainer: {
    position: 'relative',
    top: '-5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navBar: {
    top: '100%',
    left: 0,
  },
  artisticInnovations: {
    marginTop: '0em',
    paddingBottom: '4em',
  },
  footer: {
    paddingTop: '2em',
    marginTop: '2em',
  },
  contentStyle: {
    minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '2rem',
  },
  backgroundContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  

};

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [displayLoadingScreen, setDisplayLoadingScreen] = useState(true);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setDisplayLoadingScreen(false);
    }, 3500);
  }, []);

  const handleClick = (page) => {
    setDisplayLoadingScreen(true);
    handlePageChange(page);
    setTimeout(() => {
      setDisplayLoadingScreen(false);
    }, 3500);
  };




  return (
    <BrowserRouter>
    <div style={styles.container}>
      {displayLoadingScreen && (
        <LoadingScreen style={{ zIndex: 9999, position: 'fixed' }} />
      )}
      <div id="Main" style={styles.container}>
            <div style={styles.navBarContainer}>
              <Hero style={styles.hero} />
              <div style={styles.navBar}>
                <NavBar handleClick={handleClick} />
                <Divider
                  className="navDivider"
                  variant="middle"
                  sx={{
                    position: 'relative',
                    top: '-3vh',
                    width: '95%',
                    borderTop: '1px solid rgba(0,0,0,1)',
                  }}
                />
              </div>
            </div>
            <div style={styles.artisticInnovations}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ArtisticInnovations
                      currentPage={currentPage}
                      handleClick={handleClick}
                      style={styles.contentStyle}
                    />
                  }
                />
                <Route
                  path="/murals"
                  element={<Murals handleClick={handleClick} style={styles.contentStyle} />}
                />
                <Route
                  path="/commercial-window-art"
                  element={<CommercialWindowArt handleClick={handleClick} style={styles.contentStyle} />}
                />
                <Route path="/custom" element={<Custom handleClick={handleClick} style={styles.contentStyle} />} />
                <Route
                  path="/contact"
                  element={<ContactInfo handleClick={handleClick} style={styles.contentStyle} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div style={styles.footer}>
              <Footer />
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
  
  
  
  };

  export default App;
