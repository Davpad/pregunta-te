const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			createUser: async (email, password, username, navigate) => {
				try {
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
		}
	};
};

export default getState;