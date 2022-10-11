import * as t from "https://deno.land/std/testing/asserts.ts";

export const test = (title, func) => {
  Deno.test(title, async (denot) => {
    const tt = {
      deepEqual: (a, b) => t.assertEquals(a, b),
      equal: (a, b) => t.assertEquals(a, b),
      plan: () => {},
      test: async (title, func) => await denot.step(title, () => func(tt)),
    };
    await func(tt)
  });
};
