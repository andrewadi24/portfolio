window.addEventListener("load", (event) => {
    document.getElementById('submit_btn').addEventListener('click', e =>{
        e.preventDefault()
        alert("Message received succesfully")
    })
  });