import Siderbar from './components/Siderbar';
import MainContent from './components/MainContent';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Roberto Luna</h1>
      <Siderbar />
      <MainContent />
    </div>
  );
}

export default App;
