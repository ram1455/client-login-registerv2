import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoutes from './routes/PublicRoutes';
import "./App.css";
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  return (
    <div className="App">
    <PublicRoutes/>
    <PrivateRoutes/>
    </div>
  );
}

export default App;
