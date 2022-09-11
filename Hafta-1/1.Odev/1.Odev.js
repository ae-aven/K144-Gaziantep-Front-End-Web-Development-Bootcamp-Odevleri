let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]


//arr1 başına 'a' elemanını ekleyiniz

arr1.unshift('a');
console.log(arr1);

//arr1 sonuna 6 elemanını ekleyiniz

arr1.push(6);
console.log(arr1);

//arr1 sonundaki elemanı siliniz

arr1.pop();
console.log(arr1);

//arr1 başındaki elemanı siliniz

arr1.shift();
console.log(arr1);

//arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz

let newArr = arr1.concat(arr2);
console.log(newArr);

newArr=[...arr1,...arr2];
console.log(newArr);

/* kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve  aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız */

function searchParam(arr,param){

if(arr.includes(param)){
return true
}
else {return false }
}

console.log(searchParam(arr2,'h'));

//arr2 içindeki 'h' elemanın indexini bulunuz
let hIndex = arr2.indexOf('h')
console.log(hIndex);


//arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşürünüz

newArr = arr2.slice(1, 4)
console.log(newArr)

arr2.splice(0,4);
console.log(arr2);

/*kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number  değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   */


let sumNumberVals = (arr) => {
const onlyNumbers = arr.filter(
  element => typeof element === 'number'
);

const sumNumberVals = onlyNumbers.reduce((res,num) => res+num,0);
return sumNumberVals;
}
console.log(sumNumberVals(arr1));


//arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız  

let convertStringAll = arr1.map(item => item.toString());
console.log(convertStringAll);

//arr3 içindeki id değeri 221 olan elemanı bulunuz

let findID = arr3.find((item) => item.id === 221);
console.log(findID);


//arr3 içindeki user değerleri ali olan elemanları bulunuz

let aliUsers = arr3.filter(item => item.name === "ali");
console.log(aliUsers);

//*arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

function sumIDs(arr) {
let arrIDs = [];

for(let i= 0; i<arr.length ; i++){
arrIDs.push(arr[i].id);

}
return arrIDs.reduce((a,b) => a+b ,0)
}
console.log(sumIDs(arr3));



