import React, { useState } from 'react';

import './style.scss'

import { getAuth, createUserWithEmailAndPassword } from "../../firebase/index";

export const SignInPage = () => {

    let [emailData, setEmailData] = useState("")
    let [passwordData, setPasswordData] = useState("")


    const getEmailData = (e) => {
        setEmailData(emailData = e.target.value)
    }

    const getPasswordData = (e) => {
        setPasswordData(passwordData = e.target.value)
    }

    const sigInFirebase = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailData, passwordData)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          alert("entrou")
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
                        <input type="text" placeholder="Nome de usuário" />
                        <input type="email" placeholder="Email" onChange={getEmailData} />
                        <input type="password" placeholder="Senha" onChange={getPasswordData} />
                        <input type="password" placeholder="Confirme a senha" />
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