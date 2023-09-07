import './App.css';
import DataProvider from './contexts/DataProvider';
import SomeComponent from './components/SomeComponent/SomeComponent';

const App = () => {
  return (
      <DataProvider>
          {/* Other components can go here too */}
          <SomeComponent />
      </DataProvider>
  );
}

export default App;
