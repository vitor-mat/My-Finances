import React, { useState } from 'react';

import './style.scss'

import { getAuth, createUserWithEmailAndPassword } from "../../firebase/index";

export const SignInPage = () => {

    let [userNameData, setUserNameData] = useState("")
    let [emailData, setEmailData] = useState("")
    let [passwordData, setPasswordData] = useState("")
    let [passwordConfirmData, setPasswordConfirmData] = useState("")


    const handleInputData = (e, stateVariable, stateFunction) => {
        stateFunction(stateVariable = e.target.value)
    }


    const sigInFirebase = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailData, passwordData)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const formValidation = () => {

        if(!userNameData.length) return alert("Error: O campo com o nome de usuário não pode estar vazio!")

        if(!emailData.length) return alert("Error: O campo de email não pode estar vazio!")

        if(!passwordData.length) return alert("Error: O campo de senha não pode estar vazio!")

        if(!passwordConfirmData.length) return alert("Error: O campo de confirmação de senha não pode estar vazio!")

        if(
            emailData.indexOf(".com") === -1 ||
            emailData.indexOf("@") === -1 ||
            emailData.indexOf(" ") !== -1 ||
            emailData.length < 8 ||
            emailData[emailData.indexOf("@")-1] === undefined ||
            emailData[emailData.indexOf("@")+1] === undefined ||
            emailData[emailData.indexOf("@")+1] === "."
            ) return alert("Error: Este email está inválido!")

        if(passwordData !== passwordConfirmData) return alert("Error: As senhas informadas estão diferentes")
        
    }

    return (
        <div className="container">
            <header>
                <h1>My Finance$</h1>
            </header>
            <main>
                <div id="login-container">
                    <div id="longin-title">
                        <h2>Cadastrar</h2>
                    </div>
                    <div id="login-inputs-div">
                        <input type="text" placeholder="Nome de usuário" onChange={(e) => handleInputData(e, userNameData, setUserNameData)} />
                        <input type="email" placeholder="Email" onChange={(e) => handleInputData(e, emailData, setEmailData)} />
                        <input type="password" placeholder="Senha" onChange={(e) => handleInputData(e, passwordData, setPasswordData)} />
                        <input type="password" placeholder="Confirme a senha" onChange={(e) => handleInputData(e, passwordConfirmData, setPasswordConfirmData)} />
                        <button onClick={formValidation}>Cadastrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>Tenho conta, fazer <a>login</a>.</span>
                </div>
            </main>
        </div>
    )
}