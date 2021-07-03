import { Provider } from "react-redux";
import createStore from "config/redux/store";
import Router from './routes';
import "./app.scss";

function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;