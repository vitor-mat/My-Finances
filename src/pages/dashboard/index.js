import React from 'react';

import { useHistory } from 'react-router-dom';

import { getAuth, signOut } from '../../firebase/index';

import './style.scss'

export const Dashboard = () => {

    const history = useHistory();

    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            history.push("/login")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="container">
            <header className="header">
                <h1>My Finance$</h1>
                <h3>User</h3>
            </header>
            <aside>
                <ul>
                    <li onClick={signOutFirebase}>sair</li>
                </ul>
            </aside>
            <main>

            </main>
        </div>
    )
}