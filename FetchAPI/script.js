fetch('https://jsonplaceholder.typicode.com/todos/1').then(response=>
{
  if(!response.ok)
  {
    throw new Error('Network is not responding');
  }
  return response.json();
}
).then(data=>console.log(data))  
// callback function
.catch(error=>console.log(error));

