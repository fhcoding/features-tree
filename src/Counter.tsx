import type { Component } from "solid-js";
import { useStore } from "./store";

const Counter: Component = () => {
  const [state, { dispatch }] = useStore();
  let input: any;

  return (
    <>
      <div class="flex gap-2 p-5">
        <input type="number" class="border" name="increment" id="increment" ref={input} />
        <button
          class="px-4 py-1 rounded border border-gray-300 hover:bg-gray-50 transition-all"
          onClick={(e: any) => dispatch("count", input?.value)}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
