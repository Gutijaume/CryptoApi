import {useState, useEffect} from 'react'


const useForm = (callback, validateInfo) =>{ //Creamos el customHook con dos valores (actual y el de cambio) que tiene de estado los inputs
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    })

    const [errors, setErrors] = useState({}) // Estado de los posibles errores de validación
    const [isSubmitting, setIsSubmitting] = useState (false) //Creamos un nuevo estado para cuando hayamos completado correctamente el registro ocurra algo. El estado está inicialmente en false.

    const handleChange = e => { //La función que nos permitirá asignar los cambios recibe el name y el value del e.target (objeto qque recibimos)
        const {name, value} = e.target //Destructuring del objeto que recibimos en el input
        setValues({
            ...values, //El SetValues  hace spread-operator de values e iguala el name al value
            [name]: value 
        })
    }

    const handleSubmit = e => { 
        e.preventDefault() //Para evitar que el formulario se reinicie al dar submit llevamos su acción por defecto
        setErrors(validateInfo(values)) //Aquí seteamos los errores mediante los params de las validaciones que dependerá de los values que se pasen mediante los inputs
        setIsSubmitting(true) //Al hacer submit y validar correctamente todos los campos, cambiamos el estado submit a true
    }

    useEffect(()=>{ //Efecto que en caso de que las keys del objeto tenga 0 errores
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors} //Devolvemos la función handleChange que irá en cada input y el handleSubmit del botón junto con los nuevos valores y los posibles errores de validación de los inputs
}

export default useForm