let getInfo = ({
                   firstName: firstName = "Hai",
                   degree: degree = "vietnamese"
               }) => {
    console.log('First Name:', firstName);
    console.log('Degree:', degree);
}

const sv1 = {
    name: 'nguyen',
    degree: 'malay',
    gender: 'male',
    english: 'english'
}
console.log(getInfo(sv1));

