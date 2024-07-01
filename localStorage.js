/*
+ browser ve domain spesifiktir.
+ key value ikilisi olarak kayıt edilir.
+ value'lar string'dir.
*/

//Save Data to Local Storage
localStorage.setItem(key, value);

//Read Data from Local Storage
let lastname = localStorage.getItem(key);

//Remove Data from Local Storage
localStorage.removeItem(key);

//Remove All (Clear Local Storage)
localStorage.clear();

//JSON kütüphanesi
//localStorage'a kaydetmeden önce veriyi string yap
JSON.stringify(data);

//localStorage'dan aldığımız veriyi tekrar doğru veri tipine dönüştürme
JSON.parse(kayitliData);
