export default {
  count: {
    reducer: (state: any, num: any) => {
      if (!state.count) state.count = 0;
      num || (num = 1);
      state.count = state.count + num * 1;
    },
  },
} as any;
