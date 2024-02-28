import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('/check-session');
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
            }
        };

        checkSession();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/login', { username, password });
            setUser(response.data.user);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/logout');
            setUser(null);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionProvider, SessionContext };
