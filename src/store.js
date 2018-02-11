import createStore from "unistore";

export let store = createStore({ messages: [], current: "" });

export let actions = store => ({
  add: ({ messages, current }, e) => {
    e.preventDefault();
    return { messages: messages.concat(current), current: "" };
  },

  remove: ({ messages, state }, message) => ({
    messages: messages.filter(m => m !== message),
    ...state
  }),

  change: ({ current, ...state }, message) => {
    return {
      current: message,
      ...state
    };
  }
});
