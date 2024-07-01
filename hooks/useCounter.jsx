import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [state, setState] = useState(initialValue);

  function increment() {
    setState(state + 1);
  }

  function decrement() {
    setState(state - 1);
  }

  function reset() {
    setState(0);
  }

  return [state, increment, decrement, reset];
}

const [product1, increment1, decrement1, reset1] = useCounter(0);
const [product2, increment2, decrement2, reset2] = useCounter(0);
const [product3, increment3, decrement3, reset3] = useCounter(0);

const [product01, setProdcut01] = useState(0);
const [product02, setProdcut02] = useState(0);
const [product03, setProdcut03] = useState(0);

function increment01() {
  setProdcut01(product01 + 1);
}

function decrement1() {
  setProdcut01(product01 - 1);
}

function reset01() {
  setProdcut01(0);
}

function increment02() {
  setProdcut02(product02 + 1);
}

function decrement1() {
  setProdcut02(product02 - 1);
}

function reset02() {
  setProdcut02(0);
}

function increment03() {
  setProdcut03(product03 + 1);
}

function decrement1() {
  setProdcut03(product03 - 1);
}

function reset03() {
  setProdcut03(0);
}
