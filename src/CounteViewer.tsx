import type { Component } from "solid-js";
import { useStore } from "./store";

const CounterViewer: Component = () => {
  const [state] = useStore();

  return <div class="p-4 rounded border text-center inline-block">{state?.count}</div>;
};

export default CounterViewer;
