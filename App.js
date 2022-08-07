import Routes from "./app/routeFiles/Routes";
import { Provider } from "react-redux";
import store from "./app/Store/store";
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
