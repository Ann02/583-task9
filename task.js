//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//task2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let {
    names: [ , name2, , name4],
    ages: [ , age2, , age4],
  } = data;
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  
  //task3
function mul(...parameters) {
  let product = 1;
  let check = false;
  for (let i = 0; i < parameters.length; i++) {
    if (typeof parameters[i] === "number") {
      product *= parameters[i];
      check = true;
    }
  }
  if (!check) {
    product = 0;
  }

  return product;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));
  
//task4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(
            () => this.data + ""
        );
    },
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => this.result = callback();
    },
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//task5
function mapBuilder(keysArray, valuesArrays) {
  if (keysArray.length !== valuesArrays.length) {
    alert("Array sizes are not equal");
    return;
  } else {
    let map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArrays[i]);
    }
    return map;
  }
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
