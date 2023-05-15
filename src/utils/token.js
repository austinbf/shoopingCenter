export const setToken=(token)=>{
    localStorage.setItem('TOKEN',token);
}
export const removeToken=(token)=>{
    localStorage.removeItem('TOKEN');
}