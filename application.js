
const btn =document.querySelector('button');



btn.addEventListener("click",submit);


const api='http://localhost:3000'

function submit(){
    const jsonData={
            name: document.getElementById("name").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            dob: document.getElementById("dob").value,
            gender: document.querySelector('input[name="gender"]:checked')?.value || "",
            branch: document.getElementById("branch").value
    };

    console.log("Sending JSON:", jsonData);

    fetch(`${api}/user`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(jsonData)
    })
    .then(res=>res.json)
    .then(data=>console.log('succsessful added:',data))
    .catch(err=>console.error('there is problem in server:',err));

};