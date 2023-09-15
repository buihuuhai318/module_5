const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30, gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
}

let {firstName, gender, education, languages} = person;
let [english] = languages;
console.log('First Name:', firstName);
console.log('gender:', gender);
console.log('degree:', education.degree);
console.log('english:', english);

