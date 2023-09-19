import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export async function login(authDetail){
    const requestOptions = {
        method: "POST",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(authDetail)
    }

    const response = await fetch("http://localhost:8000/login", requestOptions);
    const data = await response.json();

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail){
    
    const requestOptions = {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(authDetail)
        }
    const response = await fetch("http://localhost:8000/register",requestOptions);
    const data= await response.json();
    data.accessToken ? Navigate("/products") : toast.error(data);

    if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
    }
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}