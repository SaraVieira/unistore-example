import { render } from "preact";
import Messages from "./messages";
import { Provider } from "unistore/preact";
import { store } from "./store";
import "tachyons";

const App = () => (
  <Provider store={store}>
    <div className="pa5">
      <h1 className="f1 helvetica">Messages</h1>
      <Messages />
    </div>
  </Provider>
);

export default App;

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
