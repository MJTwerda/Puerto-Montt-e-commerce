import SearchBar from './searchBar';
import NavigateSection from './navigateSection';

const Header = () => {
  return (
    <nav>
      <img src='vercel.svg' alt='e-commerce icon' />
      <SearchBar />
      <NavigateSection />
    </nav>
  )
};

export default Header;