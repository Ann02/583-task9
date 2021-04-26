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
    let prm = 1;
    let control = false;
    for (let i = 0; i < parameters.length; i++) {
      if (typeof parameters[i] === "number") {
        prm *= parameters[i];
        control = true;
      }
    }
    if (control != control) {
      prm = 0;
    }
  
    return prm;
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0
  
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
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
