import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

	const [questions, setQuestions] = useState([])
	const [oneQuestion, setOneQuestion] = useState({})
	const [userQuestions, setUserQuestions] = useState([])



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

	const addQuestion = async (question, category, option1, answer1, option2, answer2, option3, answer3, reason, logo, navigate, token) => {
		try {
			
			let response = await fetch("http://127.0.0.1:3001/api" + "/question", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					question: question,
					category: category,
					option1: option1,
					answer1: answer1,
					option2: option2,
					answer2: answer2,
					option3: option3,
					answer3: answer3,
					reason: reason,
					logo: logo
				})
			})
			let data = await response.json()
			console.log(data);
			if (response.status === 200){
				console.log(data.msg);
				setQuestions({questions: data.results})
				console.log(questions);

				// navigate ("/profile")
				return true;
			}


		}catch(error){
			console.log(error);
			return false;	
		}

	}

	const getQuestions= async () => {
		try {
			let response = await fetch("http://127.0.0.1:3001/api" + "/questions", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			})
			let data = await response.json()
			if (response.status === 200) {

				setQuestions(data.questions)
				console.log(questions);
				
			}
		} catch (error) {
			return false;
		}
	}

	const editQuestion = async (question, category, option1, answer1, option2, answer2, option3, answer3, reason, logo, navigate, token, id) => {
		try {
			
			let response = await fetch("http://127.0.0.1:3001/api" + "/question/" + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					question: question,
					category: category,
					option1: option1,
					answer1: answer1,
					option2: option2,
					answer2: answer2,
					option3: option3,
					answer3: answer3,
					reason: reason,
					logo: logo
				})
			})
			let data = await response.json()
			console.log(data);
			if (response.status === 200){
				console.log(data.msg);
				setQuestions(data.results);
				console.log(store.questions);

				navigate ("/profile")
				return true;
			}

		}catch(error){
			console.log("Error al edita el producto",error);
			return false;	
		}

	}

	const getUserQuestions= async (token) => {
		
		if (!token) {
			console.error("Falta el token de autenticación");
			return false;
		}
		try {
			let response = await fetch("http://127.0.0.1:3001/api" + "/questions-user", {
				method: "GET",
				headers:{
					"Content-Type":"application/json",
					'Authorization': `Bearer ${token}`
				},
			})
			let data = await response.json()
			if (response.status === 200){
				console.log(data.results);
				let arr = data.results;
				setUserQuestions(arr)
				console.log(store.userQuestions);
				
				return true;
			} 

		} catch (error) {
			return false;
		}

	}

	const getQuestion= async (id) => {
		try {
			let response = await fetch("http://127.0.0.1:3001/api" + "/question/" + id, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			})
			let data = await response.json()
			if (response.status === 200) {

				setOneQuestion(data)
				console.log(oneQuestion);
				
			} else {
				console.log(data);
				return console.log("No funciona");
			}
		} catch (error) {
			return false;
		}
	}

	const deleteQuestion= async (id, token) => {
		try {
			const response = await fetch("http://127.0.0.1:3001/api" + "/question/"+id, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				
			});

			const data = await response.json();
			if (response.status === 200) {
				console.log(data.msg);
				setQuestions(data.results);
				console.log("Pregunta borrada:", data.results);
				return true;

			}
		} catch (error) {
			console.error("Error al borrar la pregunta:", error);
			return false;
		}
	}

	const store = { questions, oneQuestion, userQuestions}
	const actions = { signup, login, logout, addQuestion, setQuestions, getQuestions, setOneQuestion, editQuestion, getUserQuestions, setUserQuestions, getQuestion, deleteQuestion};

	

	return (
		<AppContext.Provider value={{ store, actions }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;