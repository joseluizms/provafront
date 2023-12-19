// hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/Context';

const useAuth = () => useContext(AuthContext);

export default useAuth;
