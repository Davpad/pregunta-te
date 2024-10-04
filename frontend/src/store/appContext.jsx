import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

	const [ejemplo, setEjemplo] = useState("hola")

	const signup = async (email, password, username, navigate) => {
		try {
			console.log("Probando");

			let response = await fetch(process.env.BACKEND_URL + "/signup", {
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
	const actions = { setEjemplo, signup };

	

	return (
		<AppContext.Provider value={{ store, actions }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;