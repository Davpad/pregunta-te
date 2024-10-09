import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

	const [ejemplo, setEjemplo] = useState("hola")

	const signup = async (email, password, username, navigate) => {
		try {
			
			let response = await fetch("http://127.0.0.1:3001/api"+ "/signup", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password,
					username: username
				})
			})
			let data = await response.json()
			console.log(email);
			if (response.status === 200){
				console.log(access_token);
				localStorage.setItem("token", data.access_token);

				navigate ("/profile")
				return true;
			}else{
				return false;
			}

		}catch(error){
			console.log(error);
			return false;	
		}

	}

	const login = async (email, password, navigate) => {
		try {
			
			let response = await fetch("http://127.0.0.1:3001/api" + "/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			})
			let data = await response.json()
			console.log(email);
			if (response.status === 200){
				console.log(data.access_token);
				localStorage.setItem("token", data.access_token);
				console.log(localStorage.token);

				navigate ("/profile")
				return true;
			}else{
				return false;
			}

		}catch(error){
			console.log(error);
			return false;	
		}

	}

	const logout = () => {
		localStorage.removeItem("token")

	}

	const store = { ejemplo }
	const actions = { setEjemplo, signup, login, logout};

	

	return (
		<AppContext.Provider value={{ store, actions }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;