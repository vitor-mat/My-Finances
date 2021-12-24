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
                        <input type="password" placeholder="Confirme a senha" onChange={(e) => handleInputData(e, passwordConfirmData, setPasswordConfirmDat)} />
                        <button onClick={() => sigInFirebase()}>Cadastrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>Tenho conta, fazer <a>login</a>.</span>
                </div>
            </main>
        </div>
    )
}