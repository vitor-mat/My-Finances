import React from 'react';

import './style.scss'

export const LoginPage = () => {
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
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Entrar</button>
                    </div>
                </div>
                <div id="create-accout-div">
                    <span>criar minha <a>conta</a></span>
                </div>
            </main>
        </div>
    )
}