//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi

let fullName = "Shamil Nazarov Qabil";

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin

//! CAVAB

// let splitFulName2 = fullName.split('')
// console.log(splitFulName2);

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

//! CAVAB

// let sliceAta2 = splitFulName2.slice(15);

// let sliceSoyad2 = splitFulName2.slice(7,15);
// let aaa = sliceSoyad2.join(' ')

// let sliceAd2 = splitFulName2.slice(0,7);

// let concatFulname2 = sliceSoyad2.concat(sliceAd2,sliceAta2)
// console.log(concatFulname2);

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin

//! CAVAB

// let stringFulname2 = concatFulname2.join('')
// console.log(stringFulname2);

let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

//! CAVAB

// let reqem = 5;

// let filterArr = arr.filter((element) => element === reqem);
// let tekrarSayi = filterArr.length;

// console.log(`${reqem} ədədi ${tekrarSayi} dəfə təkrarlanıb.`);


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

//! CAVAB

// let ilkinDeyer = 0;
// let netice = arr.reduce(
//   (toplayan, hazirkiDeyer) => toplayan + hazirkiDeyer,
//   ilkinDeyer
// );
// console.log(netice);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

//! CAVAB

// let artansira = arr.sort()
// console.log(artansira);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

//! CAVAB


// let enBoyukReqem = arr.reduce((max, current) => {
//   return current > max ? current : max;
// });

// let tekrarSayi = arr.filter((element) => element === enBoyukReqem).length;

// console.log(`Ən böyük ədəd: ${enBoyukReqem}`);
// console.log(`${enBoyukReqem} ədədi ${tekrarSayi} dəfə təkrarlanıb.`);


//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

//! CAVAB

// let randomEded = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// let tesadufiEded = randomEded(1, 10);

// let yoxla = arr.includes(tesadufiEded);

// console.log(arr);
// console.log("Təsadüfi ədəd:", tesadufiEded);
// console.log("Təsadüfi ədəd arrayda varmı?", yoxla);

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

//! CAVAB

// let ad = 'shamil'
// let length = ad.length;
// let adyoxla = arr.includes(length)
// console.log(arr);
// console.log(length);
// console.log(adyoxla);

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

//! CAVAB

// tapilanReqem = 0;
// tapilaninIndexi = 0;

// for (let i = 0; i < arr.length; i++) {
//   let reqem = arr[i];
//   if (reqem % 3 === 2) {
//     tapilanReqem = reqem;
//     tapilaninIndexi = i;
//     break;
//   }
// }

// console.log(tapilanReqem);
// console.log(tapilaninIndexi);

//11) arraydaki en boyuk reqemin ilk indexini tapin

//! CAVAB

// let enBoyukReqem = arr[0];
// let indexEnBoyukReqem = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > enBoyukReqem) {
//     enBoyukReqem = arr[i];
//     indexEnBoyukReqem = i;
//   }
// }
// console.log(arr);
// console.log("En boyuk reqemin:", enBoyukReqem);
// console.log("En boyuk reqemin index i:", indexEnBoyukReqem);

// 12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

//! CAVAB

// dordReqemi = 4;
// dordReqemiIndexi = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === dordReqemi) {
//    dordReqemiIndexi.push(i);

//   }
// }
// console.log(dordReqemiIndexi);

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

//! CAVAB

// let enKicikIndex = arr.indexOf(5)
// let enBoyukIndex = arr.lastIndexOf(5)

// console.log(enKicikIndex);
// console.log(enBoyukIndex );

// 14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let yeniArr = arr.filter((reqem) => reqem > 2);
// let arrUzunlug = arr.length;
// let yeniArrUzunlug = yeniArr.length;
// let ferq = arrUzunlug - yeniArrUzunlug;

// console.log(`"arr" array'inin uzunluğu: ${arrUzunlug}`);
// console.log(`Yeni array'in uzunluğu: ${yeniArrUzunlug}`);
// console.log(`Uzunluğ fərqi: ${ferq}`);

//15) 7 reqeminin indexleri cemini tapin.

//! CAVAB

// const indeksler = arr
//   .map((num, index) => (num === 7 ? index : -1))
//   .filter((index) => index !== -1);

// let ilkinDeyer = 0;
// let netice = indeksler.reduce(
//   (toplayan, hazirkiDeyer) => toplayan + hazirkiDeyer,
//   ilkinDeyer
// );
// console.log(netice);
// console.log(indeksler);

/////////////////////////////////////////////////////
let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

//! CAVAB

// let t = arr2?.filter((obj) => obj.name.startsWith('t'));

// console.log(t);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

//! CAVAB

// let tIleBB = 0;

// arr2.forEach((obj) => {
//   if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
//     tIleBB++;
//   }
// });

// console.log(tIleBB);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// ! CAVAB

// let sum = arr2.reduce((total, obj) => {
//   if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
//     return total + obj.key;
//   }
//   return total;
// }, 0);

// console.log(sum);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// ! CAVAB

// let updatedArr = arr2.map((obj) => {
//   if (obj.name.endsWith("e")) {
//     return { ...obj, name: "SuperDev" };
//   } else {
//     return obj;
//   }
// });

// console.log(updatedArr);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// ! CAVAB

// let uzunName = arr2.reduce((prev, current) => {
//   return prev.name.length > current.name.length ? prev : current;
// });

// let uzunNameKey = uzunName.key;

// console.log(uzunNameKey);

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// ! CAVAB

// let uzunName = arr2.reduce((prev, current) => {
//   return prev.name.length > current.name.length ? prev : current;
// });

// let uzunNameKey = uzunName.key -1;
// let uzunNameIndex = uzunNameKey ** 2;

// console.log(uzunNameIndex);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// ! CAVAB

// let newArray = arr2.filter((obj) => obj.name.length === 4);

// console.log(newArray);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// ! CAVAB

// let maxKeyObj = arr2.reduce((maxObj, currentObj) => {
//   return currentObj.key > maxObj.key ? currentObj : maxObj;
// });

// let nameOfMaxKeyObj = maxKeyObj.name;

// console.log(nameOfMaxKeyObj);


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// ! CAVAB

// let indexes = [];

// arr2.forEach((obj, index) => {
//   if (obj.name.match(/L/gi)?.length === 2) {
//     indexes.push(index);
//   }
// });

// console.log(indexes);


// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

// ! CAVAB

// let keysWithTwoTs = arr2.filter(item => (item.name.match(/t/g) || []).length === 2 && item.name.includes('t')).map(item => item.key);

// console.log(keysWithTwoTs);


// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
//    arr2 de her bir obyekte indexini elave edin ve indexlerin cemini hesablayin.

// ! CAVAB

// let arrWithIndexes = arr2.map((item, index) => ({ ...item, index }));
// let sumOfIndexes = arrWithIndexes.reduce((sum, item) => sum + item.index, 0);

// console.log(arrWithIndexes); 
// console.log(sumOfIndexes); 
