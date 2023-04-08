console.log(321);
const forma = document.getElementById('form');
const butt = document.getElementById('butt');



export const test2 = async (req, res) => {
    console.log(321);

    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = {
        'password': password,
        'email': email,
        'fullname': fullname
    }
    console.log(data);


    let resu = JSON.stringify(data);
    console.log(resu);
    fetch('localhost:4444/register', data);

}
function test1() {
    console.log("is it working?")
    forma.addEventListener('butt', event => {
        //stopImmediatePropagation();




        fetch('http://localhost:4444/register', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(results => results.json())
            .then(console.log);


    });
}
function test() {
    console.log(123);
}

