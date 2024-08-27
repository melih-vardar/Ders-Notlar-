/*
+ Hook, tekrar tekrar kullanılan fonksiyonlar
+ isimlendirirken adı use ile başlar: örn: useState, useForm
+ Dikkat: genelde(standart olarak) named export yapılır
+ hooks isimli bir klasör altında oluştur
*/

/*
1. gerekli olan parametreleri belirle
Örn: localstorage için 2 tane olmalı; key ve başlangıç değeri
Örn: counter için 1 tane: başlangıç değeri
*/
export function useCounter(initialValue = 0) {}

/*
2. bu hooku kullanırken gereken ihtiyaçları(return edeceğin özellikleri) planla
örn: localstorage'da 2 tane: state ve setter fonskiyon
örn: counter için 4 tane: state, increment, decrement, reset 
*/
return [state, increment, decrement, reset];

/*
3. gerekli state/ler'ini tanımla
4. gerekli olan metodları yaz
*/

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
    setState(initialValue);
  }

  return [state, increment, decrement, reset];
}

const [product1, increment1, decrement1, reset1] = useCounter(100);
