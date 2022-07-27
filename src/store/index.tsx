import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import actions from "./actions";

const StoreContext: any = createContext();

export function StoreProvider(props: any) {
  const [store, setStore] = createStore(props.initial || {});

  function mutate(
    reducer: (...args: any[]) => any,
    find: ((state: any) => boolean) | null = null,
    payload: any = null
  ) {
    find
      ? setStore(find, produce(reducer))
      : setStore(produce(payload ? (state: any) => reducer(state, payload) : reducer));
  }

  function dispatch(action: string, payload: any) {
    const _action = actions[action];
    _action && mutate(_action.reducer, _action.find, payload);
  }
  const state = [
    store,
    {
      dispatch,
      mutate,
    },
  ];

  return <StoreContext.Provider value={state}>{props.children}</StoreContext.Provider>;
}

export function useStore(): [
  store: any,
  actions: {
    dispatch: (action: string, payload: any) => any;
    mutate: (reducer: (state: any) => any, find: (state: any) => boolean, payload: any) => any;
  }
] {
  return useContext(StoreContext);
}
