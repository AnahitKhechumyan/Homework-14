class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }

};

function loginUser(username, password){
    if(!username){
        throw new CustomError('Username is required!');
    }
    
    if(password !== "1" || password !== "2" || password !== "3"){
        throw new Error("Invalid password");
    }
    return true;
};

function login(){
    try{
        const username = document.querySelector(".username").value.trim();
        const password = document.querySelector(".password").value.trim();
        const response = loginUser(username, password);
        if(response){
        alert("Form submitted successfully!");
        }

    }catch(error){
        throw new CustomError('Login failed');
    }
};

document.querySelector('.login-container .btn').addEventListener('submit', (event)=>{
    event.preventDefault();
    login();
});