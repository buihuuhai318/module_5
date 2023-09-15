let getInfo = ({
                   firstName = "Hai",
                   degree = "vietnamese"
               }) => {
    return (`First Name: ${firstName} \nDegree: ${degree}`);
}

let sv1 = {
    name: 'nguyen',

    gender: 'male',
    english: 'english'
}
console.log(getInfo(sv1));

