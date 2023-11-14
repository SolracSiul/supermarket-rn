import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'

interface AuthProps{
    authState?: {token: string | null; authenticated: boolean | null};
    onRegister?: (name: string, email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string ) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt'
export const API_URL = 'http://192.168.15.6:3000'
const AuthContext = createContext<AuthProps>({})


export const useAuth = () =>{
    return useContext(AuthContext)
}
export const AuthProvider = ({children}: any) =>{
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({token: null, authenticated: null})

    useEffect(() =>{
        const loadToken = async ()=>{
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            console.log('verifica atual token:', token)
            if(token){
                if(token){
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                    setAuthState({
                        token: token,
                        authenticated: true
                    })
                }
            }
        }
        loadToken()
    },[])
    const register = async(name: string, email:string, password: string) =>{
        try{
            return await axios.post(`${API_URL}/user`, {name, email, password})
        }catch(e){
            return{error: true, msg: (e as any).response.data.msg}
        }
    }

    const login = async(email:string, password: string) =>{
        try {
            const result = await axios.post(`${API_URL}/login`, { email, password });
            const customResult = JSON.stringify(result.data.token)
            console.log('custom token', customResult)
            console.log('Usuário autenticado:', result);
        
            if (result && result.data && result.data.token) {
              setAuthState({
                token: result.data.token,
                authenticated: true,
              });
        
              axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
              console.log('Chamou aqui?');
        
              await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
        
              return result;
            } else {
              console.error('Resposta inválida:', result);
              return { error: true, msg: 'Resposta inválida do servidor' };
            }
          } catch (e) {
            if (axios.isAxiosError(e)) {
                // Verifique se é um erro do Axios
                if (e.response) {
                  // O servidor respondeu, mas com um código de status diferente de 2xx
                  console.error('Erro na resposta do servidor:', e.response.data);
                  return { error: true, msg: e.response.data.msg || 'Erro na resposta do servidor' };
                } else if (e.request) {
                  // A solicitação foi feita, mas não houve resposta do servidor
                  console.error('Sem resposta do servidor:', e.request);
                  return { error: true, msg: 'Sem resposta do servidor' };
                } else {
                  // Algum problema durante a configuração da solicitação
                  console.error('Erro durante a configuração da solicitação:', e.message);
                  return { error: true, msg: 'Erro durante a configuração da solicitação' };
                }
              } else {
                // Outros tipos de erros
                console.error('Erro desconhecido:', e);
                return { error: true, msg: e.message || 'Erro desconhecido' };
              }
          }
    }
    const logout = async () =>{
        console.log('pede pra sair')
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = ''
        setAuthState({
            token: null,
            authenticated: false
        })
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}