import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, useNavigate, HashRouter} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//component imports
import { Header } from './components/header/header';
import { ShowList } from './components/showList/showList';
import { GlobalStyles } from './indexStyles';
import { Footer } from './components/footer/footer';
import { ShowInfo } from './components/showInfo/showInfo';

//Hook import for searching shows
import useShowSearch from './hooks/useShowSearch';

function Main() {
  const [ query, setQuery ] = React.useState('');
  const { shows, loading, error, searchShows } = useShowSearch(query);
  const navigate = useNavigate();

  // Function to handle search input from the Header component
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    searchShows(searchTerm);
    navigate('/'); // Navigate to the home page after searching
  };

  return (
    <>
      <GlobalStyles/>
        <Header onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<ShowList shows={shows} loading={loading} error={error} />} />
            <Route path="/show/:showId" element={<ShowInfo />} />
          </Routes>
        </main>
        <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>
);