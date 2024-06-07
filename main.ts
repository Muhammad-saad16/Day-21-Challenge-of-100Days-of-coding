//🚀 Day 21 Challenge: Start Coding! 🚀

//Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum Vehicles {
    car ,
    truck,
    motorcycles
}

console.log(Vehicles.motorcycles); //output is 2 
console.log(Vehicles.truck);   //output is 1


// Question 62: 
// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
// and then fill in this blueprint with an example student.


interface Student {
    name: string;
    age: number;
    courses: string[];
}

let student: Student = {
    name: "Muhammad Saad",
    age: 16,
    courses: ["Web Development", "AI(Artifical Intelligence)", "History"]
}

console.log(student);



// Question 63
//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.


// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shapes = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles             //    ?   is used to optional  
    width?: number; // Only for rectangles             //    ?   is used to optional 
    height?: number; // Only for rectangles             //    ?   is used to optional 
};

// Describe a circle 
let circle: Shapes = {
    kind: "circle",
    radius: 3
};

// Describe a rectangle 
let rectangle: Shapes = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.