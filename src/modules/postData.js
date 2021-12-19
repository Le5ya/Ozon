const postData = () => {
  return fetch('http://localhost:3000/goods', {
  method: 'POST',
  body: JSON.stringify({
		title: "Civilization VI",
		price: 3000,
		sale: true,
		img: "https://upload.wikimedia.org/wikipedia/ru/3/3e/Civilization_VI_Cover_Art.jpg",
		category: "Игры и софт"
	}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())

 
}

export default postData 