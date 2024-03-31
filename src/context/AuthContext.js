// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const login = async (email, password,account) => {
        try {
            const res = await axios.post('http://localhost:4000/login',
                {
                    email: email,
                    password: password,
                    account: account
                });
            
            console.log(res);
            if (res.data.status === 200) {
                toast.success("Login Successfull!!");
                fetchUserData();
                setTimeout(() => {
                    navigate('/aimarketplace');
                }, 2000);
            }
            else {
                toast.error("Invalid credentials");
            }

        }
        catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.get('http://localhost:4000/logout');
            setUser(null);
            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Logout failed');
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/login');
            setUser(response.data.user);
            console.log(response.data);
        } catch (error) {
            console.error('Fetch user data error:', error);
            toast.error('Failed to fetch user data');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
