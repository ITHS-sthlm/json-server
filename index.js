//skapar en ny "user"
const newUser = {
    name: 'Nelson',
    age: 4
};

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Funkar ju inte!!!!');
        }
        return response.json();
    })
    .then((data) => {
        console.log('user tillagt', data);
    })
    .catch((error) => {
        console.error('gick inte att lägga till en ny användare', error);
    });
