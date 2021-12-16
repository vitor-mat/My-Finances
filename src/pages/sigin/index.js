import React from 'react';

import './style.scss'

export const SignInPage = () => {
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
                        <input type="text" placeholder="Nome de usuário"/>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirme a senha" />
                        <button>Cadastrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>Tenho conta, fazer <a>login</a>.</span>
                </div>
            </main>
        </div>
    )
}