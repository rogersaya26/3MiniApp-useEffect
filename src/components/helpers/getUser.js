const getUser = async () => {

  const userId = Math.floor(Math.random()*10)+1;

  const url = "https://jsonplaceholder.typicode.com/users/"+userId;
  const res = await fetch(url)
  //reemplaze data por user ya que estamos recibiendo el usuario en esta url
  const user = await res.json()

  return user

}

export default getUser