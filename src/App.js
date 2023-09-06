import './App.css';
import RestaurantPreview from './components/BusinessList'
import Header from './components/Header'
import restaurants from './restaurants'

function App() {
  return (
      <main className='App'>
        <Header />
        <RestaurantPreview  restaurants={restaurants} />
      </main>
  );
}

export default App;
