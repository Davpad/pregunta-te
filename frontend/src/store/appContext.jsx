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
				console.log(data.access_token);
				localStorage.setItem("token", data.access_token);

				console.log(data);
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
			
			let response = await fetch(process.env.BACKEND_URL + "/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			})
			if (!response.ok) {
				const errorData = await response.json()
				console.log(errorData);
				throw new Error(errorData.msg)
			}
			let data = await response.json()
			if (data) {
				console.log(data);
				navigate("/profile")
				return data.msg;
			} else {
				console.log(data);
				return false
			}
		} catch (error) {
			console.log(error.message);
			return error.message;
		}

	}

	const store = { ejemplo }
	const actions = { setEjemplo, signup, login };

	

	return (
		<AppContext.Provider value={{ store, actions }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;