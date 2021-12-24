import React, { useState } from 'react';

import { Link } from 'react-router-dom';

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

        if(passwordData.length < 8) return alert("Error: sua senha não pode ter menos que 8 caracteres!")

        if(passwordData.indexOf(" ") !== -1) return alert("Error: Sua senha não pode conter espaços")

        if(passwordData !== passwordConfirmData) return alert("Error: As senhas informadas estão diferentes")
        
        sigInFirebase()
    }

    return (
        <div className="container">
            <header>
                <h1>My Finance$</h1>
            </header>
            <main>
                <div id="signIn-container">
                    <div id="signIn-title">
                        <h2>Cadastrar</h2>
                    </div>
                    <div id="signIn-inputs-div">
                        <input type="text" placeholder="Nome de usuário" onChange={(e) => handleInputData(e, userNameData, setUserNameData)} />
                        <input type="email" placeholder="Email" onChange={(e) => handleInputData(e, emailData, setEmailData)} />
                        <input type="password" placeholder="Senha" onChange={(e) => handleInputData(e, passwordData, setPasswordData)} />
                        <input type="password" placeholder="Confirme a senha" onChange={(e) => handleInputData(e, passwordConfirmData, setPasswordConfirmData)} />
                        <button onClick={formValidation}>Cadastrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>Tenho conta, fazer <Link to="/login">login</Link>.</span>
                </div>
            </main>
        </div>
    )
}