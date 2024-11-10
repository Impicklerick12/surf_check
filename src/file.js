// const arr = [1,2,3,4,5];

// const sleep = time => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// };

// const myPromise = number => {
//   return sleep(500).then(() => {
//     console.log(`${number} done!`);
//   });
// };

// const forEachNumber = async (array, action) => {
//   for (const num of array) {
//     await action(num);
//   };
// };

// forEachNumber(arr, myPromise).then(() => {
//   console.log("All done!");
// });

// new Promise((resolve, reject) => {
//   return setTimeout(() => resolve(1), 1000)
// }).then(res => {
//   console.log(res); // 1
//   return new Promise((resolve, reject) => setTimeout(() => resolve(res + 1), 1000));
// }).then(res => {
//   console.log(res); // 2;
//   return new Promise((resolve, reject) => setTimeout(() => resolve(res + 1), 1000));
// }).then(res => {
//   console.log(res); // 3;
//   return new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
// }).then(res => {
//   console.log(`${!!res ? "Done" : "Failed"}`);
// }).catch(error => console.log(error));

// import data from "config.json";


// const data = [1];

// const sleep = ms => {
//   return new Promise((resolve, reject) => setTimeout(resolve, ms));
// }

// const fetchMockData = (data, ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data.type) return resolve(data.type);
//       return reject("ERROR!")
//     }, ms)
//   })
// };

// const getJsonData = () => {
//   return fetchMockData({ hello: "HERE"}, 1000)
//     .then(res => console.log(res))
//     .catch(error => console.log(error));
// }

// getJsonData();

// reduce practice

// function total(arr) {
//   // your code here
//   return arr.reduce((acc, num) => acc + num, 0);
// }

// console.log(total([1,2,3])); // 6
// console.log(total([1,1,1,100])); // 103

// function stringConcat(arr) {
//   // your code here 
//   return arr.reduce((acc, num) => `${acc}` + `${num}`);
// }

// console.log(stringConcat([1,2,3])); // "123"

// const voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
// ];

// function totalVotes(arr) {
//   // your code here
//   return arr.reduce((acc, voter) => {
//     if (voter.voted) acc++;
//     return acc;
//   }, 0)
// }

// console.log(totalVotes(voters)); // 7

// const wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];
// function shoppingSpree(arr) {
//   // your code here
//   return arr.reduce((acc, item) => acc + item.price, 0);
// }

// console.log(shoppingSpree(wishlist)); // 227005

// const arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];
// function flatten(arr) {
//   // your code here    
//   return arr.reduce((acc, array) => acc.concat(array), []);
// }

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
// and how many of each of those age ranges actually voted. The resulting object containing this data should 
// have 6 properties. See the example output at the bottom.
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//   const initState = { 
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numOldVotesPeople: 0,
//     numOldsPeople: 0
//   }
//  // your code here
//  return arr.reduce((acc, voter) => {
//   if (voter.age < 26) {
//     acc.numYoungPeople++;
//     if (voter.voted) acc.numYoungVotes ++;
//   }
//   if (voter.age >= 26 && voter.age < 36) {
//     acc.numMidsPeople++;
//     if (voter.voted) acc.numMidVotesPeople ++;
//   }
//   if (voter.age >= 36) {
//     acc.numOldsPeople++;
//     if (voter.voted) acc.numOldVotesPeople ++;
//   }
//   return acc;
//  }, initState)
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/

// arr squared
// const input = [1, 2, 3, 4, 5];
// const squaredArrPow = input.map(number => Math.pow(number, 2));
// const squaredArr = input.map(number => number * number);
// console.log(squaredArrPow);
// console.log(squaredArr);

// sum of positive elements
// const input = [1, -4, 12, 0, -3, 29, -150];
// const sum = input.reduce((acc, num) => {
//   if (num > 0) {
//     return acc + num;
//   }
//   return acc;
// }, 0);
// console.log(sum);

// const toHex = value => {
//   const hex = value.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// const rgbToHex = rgb => {
//   const [red, green, blue] = rgb.match(/\d+/g).map(Number);
//   return `#${toHex(red) + toHex(green) + toHex(blue)}`
// };

// console.log(rgbToHex("rgb(0,0,0)")); // #000000
// console.log(rgbToHex('rgb(255, 12, 0)')); // #ff0c00

// const rgb = "rgb(12,13,14)";
// const rgbString = rgb.slice(4, rgb.length - 1);
// const rgbSplit = rgbString.split(",");

// const toHex = value => {
//   const hex = value.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// const rgbToHex = rgb => {
//   const rgbString = rgb.slice(4, rgb.length - 1);
//   const [red, green, blue] = rgbString.split(",").map(Number);
//   return `#${toHex(red) + toHex(green) + toHex(blue)}`
// };

// console.log(rgbToHex("rgb(0,0,0)")); // #000000
// console.log(rgbToHex('rgb(255,12,0)')); // #ff0c00

// find average rgb for multiple colours
// const rgbArr = ["rgb(0,0,0)", "rgb(12,200,100)", "rgb(255,255,255)", "rgb(8,12,140)"];

// const getRgbValues = string => {
//   const rgbString = string.slice(4, string.length - 1);
//   return rgbString.split(",").map(Number);
// }
// const getAverageRGB = arr => {
//   const initState = {
//     red: 0,
//     green: 0,
//     blue: 0
//   };
//   const rgbTotals = arr.reduce((acc, rgb) => {
//     const [redValue, greenValue, blueValue] = getRgbValues(rgb);
//     acc.red += redValue;
//     acc.green += greenValue;
//     acc.blue += blueValue;
//     return acc;
//   }, initState);
//   Object.keys(rgbTotals).forEach(key => rgbTotals[key] = Math.floor(rgbTotals[key] / arr.length));
  
//   return `rgb(${rgbTotals.red},${rgbTotals.green},${rgbTotals.blue})`
// }
// console.log(getAverageRGB(rgbArr));

// function makeAdder(x) {
//   return function (y) {
//     console.log(y) // 2
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// const url = 'https://jsonplaceholder.typicode.com/posts/';
// const config = {
//   method: 'get'
// };

// const fetchPost = postNumber => {
//   return fetch(url + postNumber, config)
//     .then(res => res.json())
//     .then(res => res)
//     .catch(err => err)
// }

// const recursiveFetch = async ({ postNumber, data, errors, maxCalls }) => {
//   const postData = await fetchPost(postNumber);
  
//   data.push(postData);

//   if (postNumber <= maxCalls) {
//     return recursiveFetch({ postNumber: postNumber + 1, data, maxCalls});
//   } else {
//     return data
//   }
// }

// console.log(recursiveFetch({ postNumber: 1, data: [], errors: [], maxCalls: 3 }));

// const url = 'https://www.data.qld.gov.au/datastore/dump/2bbef99e-9974-49b9-a316-57402b00609c?format=json';
// const config = {
//   method: 'get'
// };


// ---------------------------------------------------------------------------------------------------------------------- //
// QLD Wave Data
// const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
// const limit = 100; // Number of records to fetch

// const url = `https://data.qld.gov.au/api/3/action/datastore_search?resource_id=${resourceID}&limit=${limit}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Access the records array
//     const records = data.result.records;

//     // Log each record
//     records.forEach(record => {
//       console.log(record);
//     });
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
// ---------------------------------------------------------------------------------------------------------------------- //


// ---------------------------------------------------------------------------------------------------------------------- //
// attempt at fetching data from aodn.org.au
  // async function fetchAODNData() {
  //   const datasetUUID = 'b299cdcd-3dee-48aa-abdd-e0fcdbb9cadc';
  //   const endpoint = `https://portal.aodn.org.au/geoserver/wfs`;
  //   const url = `${endpoint}?service=WFS&version=1.0.0&request=GetFeature&typeName=dataset:${datasetUUID}&outputFormat=json`;
  
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching AODN data:', error);
  //   }
  // }
  
  // fetchAODNData();
// ---------------------------------------------------------------------------------------------------------------------- //

// ---------------------------------------------------------------------------------------------------------------------- //
const fetchUniqueSites = async () => {
  const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
  const sql = encodeURIComponent(`SELECT DISTINCT "Site" FROM "${resourceID}"`);
  const url = `https://data.qld.gov.au/api/3/action/datastore_search_sql?sql=${sql}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // List of unique Site names

    const uniqueSites = data.result.records.map((record) => record.Site);
    console.log(uniqueSites); // List of unique Site names
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

// Call the function to fetch unique sites
fetchUniqueSites();
// ---------------------------------------------------------------------------------------------------------------------- //


// ---------------------------------------------------------------------------------------------------------------------- //
// Previous react/typescript home page fetching all sites data with pagination
// import * as React from 'react';
// import style from "./style.module.css";
// import WaveData from "./Components/WaveData";
// import { WaveDataProps } from './types/WaveDataProps'; 

// const App: React.FC = () => {
//   const [waveData, setWaveData] = React.useState<WaveDataProps[]>([]);
//   const [offset, setOffset] = React.useState(0);
//   const limit = 100; // Number of records to fetch

//   const fetchWaveData = (offset: number) => {
//     const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
//     const url = `https://data.qld.gov.au/api/3/action/datastore_search?resource_id=${resourceID}&limit=${limit}&offset=${offset}`;

//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setWaveData(prevWaveData => [...prevWaveData, ...data.result.records]);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };
//   const handleLoadMore = () => {
//     setOffset(prevOffset => prevOffset + limit)
//   };

//   React.useEffect(() => {
//     fetchWaveData(offset)
//   }, [offset]);

//   return (
//     <div className={style.App}>
//       <div className={style.waveDataWrapper}>
//         {waveData.map((record: WaveDataProps) => (
//           <WaveData { ...record } />
//         ))}
//       </div>
//       <button onClick={() => handleLoadMore()}>Fetch More</button>
//     </div>
//   )
// }

// export default App
// ---------------------------------------------------------------------------------------------------------------------- //