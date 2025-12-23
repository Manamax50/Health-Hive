import {Navigate} from 'react-router-dom';
import type {protectedRoute} from '../types/types.ts';

export default function ProtectedRoute({page}:protectedRoute){

    const token = localStorage.getItem('token');

    if  (!token){
        return <Navigate to='/' replace/>
    }
    
    return <> {page}</>
   
}