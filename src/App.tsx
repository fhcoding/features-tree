import type { Component } from "solid-js";
import Counter from "./Counter";
import CounterViewer from "./CounteViewer";

const App: Component = () => {
  return (
    <div>
      <header>Project Feature</header>
      <section class="flex flex-col items-center">
        <CounterViewer />
        <Counter />
      </section>
    </div>
  );
};

export default App;
