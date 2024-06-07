"use strict";
//🚀 Day 21 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["car"] = 0] = "car";
    Vehicles[Vehicles["truck"] = 1] = "truck";
    Vehicles[Vehicles["motorcycles"] = 2] = "motorcycles";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.motorcycles); //output is 2 
console.log(Vehicles.truck); //output is 1
let student = {
    name: "Muhammad Saad",
    age: 16,
    courses: ["Web Development", "AI(Artifical Intelligence)", "History"]
};
console.log(student);
// Describe a circle 
let circle = {
    kind: "circle",
    radius: 3
};
// Describe a rectangle 
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
