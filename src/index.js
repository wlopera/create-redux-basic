import { createStore } from "./redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "NUEVA":
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  console.log("Subscribe 11: ", state);
});

store.subscribe(() => {
  const state = store.getState();
  console.log("Subscribe 22: ", state);
});

store.subscribe(() => {
  const state = store.getState();
  console.log("Subscribe 33: ", state);
});

setInterval(() => {
  store.dispatch({
    type: "NUEVA",
    payload: {
      value: Math.random(),
    },
  });
}, 2000);
