import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';
import app from '../Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { useEffect } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, url)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: url
        })
    }
    const LogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
        
    }, [])


    const {data: products = []} = useQuery({
        queryKey: ["products"],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/product`);
            const data = await res.json();
            return data;
        }
    })
    const {data: wishlist = [], refetch} = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const {data: cart = []} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
            const data = await res.json();
            return data;

        },
        refetchInterval: 1000,
    })
   
    console.log(cart)
    const authinfo = {
        products,
        wishlist,
        createUser, LogIn, LogOut, profileUpdate, user, loading, refetch, cart
    }
    return (
        <AuthContext.Provider value= {authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;