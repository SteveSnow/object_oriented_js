function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

function Student(fname, lname,grade,age) {
    this.grade = grade,
    this.age =age;
    Person.apply(this, arguments);
}
Student.prototype = new Person();

function Teacher() {
    this.specialty = ''
    Person.apply(this, arguments);
}
Teacher.prototype = new Person()

// lists all the methods of an associated object
function getMethods(obj) {
    for (x in obj) {
        console.log(x)
    }
}

function Multiplier() {
    var cv
    if (cv == null) { cv = 1 }
    this.multiply = function(n) {
    	if (n==NaN) {n=1}
        rVal = n * this.getCurrentValue()
        cv = rVal
        return rVal
    }
    this.getCurrentValue = function() {
        return cv
    }
}


function Photo(name, location) {
    this.name = name,
    this.location = location
}

function Album() {
    this.photos = []
    this.addPhoto = function(p) { this.photos.push(p) }
    this.listAllPhotos = function() {
        for (var i = 0; i < this.photos.length; i++) {
            console.log(this.photos[i].name)
        }
    }
    this.getPhoto = function(id) {
        if (this.photos[id]) {
            return this.photos[id]
        } else {
            return "no photo at that position"
        }
    }
}
function findEmployeesRole(name) {
  for (var i =0; i <employees.length; i++) {
  	if (name==employees[i].firstName + ' ' + employees[i].lastName) {
  		return employees[i].role
  	}
  }
  return 'Does not work here!'
}

['casdkfea', 'shiaw3rd', 'd2utasop', 'jhectopoa', 'lwmrkylwkwa', 'aweranwer', 'asdfnaos', 'k234kjarsadfa', 'ajkj34adrfa', 'lk234jlkjia', 'aslwj0sdfds'] 
