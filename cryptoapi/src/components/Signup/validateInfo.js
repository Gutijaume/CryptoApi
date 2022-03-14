

export default function validateInfo(values) {
    let errors = {} //Creamos variable errores, que será un objeto vacío que llenaremos con los posibles errores
    
    if (!values.username.trim()){
        errors.username = 'Nombre de usuario requerido' //Es obligatorio introducir un username
    }

    if (!values.email.trim()){
        errors.email = 'Email requerido' //Es obligatorio introducir un email
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i.test(values.email)){ //Validaciones para comprobar que es un email válido
        errors.email = 'Introduce un email válido'
    }

    if(!values.password){
        errors.password='Password requerido'//Es obligatorio introducir un password
    } else if (values.password.length < 6) {
        errors.password = 'Tu password debe tener más de 6 carácteres' //El password deberá contener más de 6 carácteres
    }

    if(!values.passwordConf){
        errors.passwordConf='Password requerido'
    } else if (values.passwordConf !== values.password) {
        errors.passwordConf = 'Tus passwords no coinciden' //passwordConf y password deben ser iguales para que no nos salte el error
    }

    return errors //Retornará y guardará en la variable los errores


}
