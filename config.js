const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Algum tempo depois...');
    }, 3000)
});


promise.then(response => {
    console.log(response);
});
  console.log('Imediato!');


function getUser(id){
  return fetch(`https://reqres.in/api/users?id=${id}`)
  .then((data) => data.json())
  .catch((err)=> console.log('aconteceu um erro' + err));
}

async function showUserName(id){
  try{
    const user = await getUser(id)
    console.log(`o numero do usuario é: ${user.data.first_name}`)
  } catch (error){
    console.log(`Erro: ${error}`);
  }
}

showUserName(1);