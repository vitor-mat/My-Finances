import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from "../../firebase/index";

import './style.scss'

export const LoginPage = () => {

    const history = useHistory() 

    let [emailData, setEmailData] = useState("")
    let [passwordData, setPasswordData] = useState("")


    const handleInputData = (e, stateVariable, stateFunction) => {
        stateFunction(stateVariable = e.target.value)
    }


    const loginFirebase = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailData, passwordData)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                history.push('/dashboard')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if(errorCode === "auth/user-not-found") return alert("Error: Usuário não existe!")
                if(errorCode === "auth/wrong-password") return alert("Error: A senha está iconrreta!")
            });
    }

    const formValidation = () => {

        if (!emailData.length) return alert("Error: O campo de email não pode estar vazio!")

        if (!passwordData.length) return alert("Error: O campo de senha não pode estar vazio!")

        if (
            emailData.indexOf(".com") === -1 ||
            emailData.indexOf("@") === -1 ||
            emailData.indexOf(" ") !== -1 ||
            emailData.length < 8 ||
            emailData[emailData.indexOf("@") - 1] === undefined ||
            emailData[emailData.indexOf("@") + 1] === undefined ||
            emailData[emailData.indexOf("@") + 1] === "."
        ) return alert("Error: Este email está inválido!")

        loginFirebase()

    }

    return (
        <div className="container">
            <header>
                <h1>My Finance$</h1>
            </header>
            <main>
                <div id="login-container">
                    <div id="longin-title">
                        <h2>Entrar</h2>
                    </div>
                    <div id="login-inputs-div">
                        <input type="email" placeholder="Email" onChange={(e) => handleInputData(e, emailData, setEmailData)} />
                        <input type="password" placeholder="Senha" onChange={(e) => handleInputData(e, passwordData, setPasswordData)} />                        
                        <button onClick={formValidation}>Entrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>criar minha <Link to="/sign-in">conta</Link></span>
                </div>
            </main>
        </div>
    )
}