//1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values
class Movie{
    constructor(title,studio,rating){
this.title = title;
this.studio = studio;
 this.rating=rating;

    }

}
var movie1 = new Movie("AVENGERS","MARVEL","PG13")
var movie2 = new Movie("BATMAN","DC","PG15")
console.log(movie1)
console.log(movie2)

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie{
    constructor(title,studio,rating){
this.title = title;
this.studio = studio;
if (rating ==undefined){
    this.rating="PG"
}else{
    this.rating=rating;
}
    }

}
var movie = new Movie("AVENGERS","MARVEL")
var movie2 = new Movie("BATMAN","DC","PG15")
console.log(movie,movie2)


//c. Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
    constructor(title,studio,rating){
this.title = title;
this.studio = studio;
if (rating ==undefined){
    this.rating="PG"
}else{
    this.rating=rating;
}
    }
    getPG(array) {
        var result=[];
        for (var i=0;i<array.length;i++){
            if (array[i].rating=="PG") {
                result.push(array[i]);
            }
    }
    return result;
}
}
var movie1 = new Movie("AVENGERS","MARVEL")
var movie2 = new Movie("BATMAN","DC","PG15")
var movie3 = new Movie("jsa","saf")
var movie4 = new Movie("djvav","nniem","pg13")
var array=[movie1,movie2,movie3,movie4]
console.log(movie2.getPG(array))

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie{
    constructor(movie,studio,rating){
this.movie = movie;
this.studio =studio;
this.rating =rating;

    }
}
var hero = new Movie("Casino Royale","Eon Productions","PG13")
console.log(hero);

//2.Convert the UML diagram to Typescript class.

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(2, "red");
  console.log(obj1.radiusCircle); 
  
  obj1.radiusCircle = 6;
  console.log(obj1.radiusCircle);

//3. write a "person" class to hold all the details
class Person {
    constructor(name,age,gender,salary,location,address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.location = location;
       this.address = address;
       
     
    }
  
    }
    var test=new Person("moskov","20","male","200000","kanyakumari","20/7,murugan street")
    console.log(test)

//4.write a class to calculate the uber price.
class Uber {
    constructor(type,distance,fixedprice,triptime){
      this.type=type;
      this.distance=distance;
      this.fixedprice=fixedprice;
      this.triptime=triptime
    }
  
    }
    var good=new Uber("suv","30","40","2")
   var total=(+(good.fixedprice))*((+(good.distance))+(+(good.triptime)))
    console.log(total)
   
    