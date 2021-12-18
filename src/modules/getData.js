const getData = () => {
   return fetch('https://mytest-daeae-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json()
      }) 
}




export default getData 