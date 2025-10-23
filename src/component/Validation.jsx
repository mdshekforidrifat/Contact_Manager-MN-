export default function Validation (values){
    let errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name ===""){
        errors.name = "Name Should not empty"
    }else if(values.name.lenght < 3 || values.name.lenght > 30 ){
        errors.name = "Name must B/W 3-30"
    }else{
        errors.name=""
    }


    if(values.email ===""){
        errors.email = "Email Should not empty"
    }else if(!email_pattern.test(values.email)){
        errors.email = "Invalid Email"
    }else{
        errors.email=""
    }


    if(values.password ===""){
        errors.password = "Password Should not empty"
    }else if(!password_pattern.test(values.password)){
        errors.password = "Invalid Password"
    }else{
        errors.password=""
    }


    return errors;
}