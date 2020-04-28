import React from "react";
import Input from "./Component/Library/Add";
import thunk from "redux-thunk";
// import Index from "./Component/Library/Index";
import Main from "./Component/Library/Main";
import Reducer from "./Reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(Reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Input />
            {/* <Index /> */}
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
