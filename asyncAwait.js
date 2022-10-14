async function getData() {
    
      const response = await getCustomer();
      console.log(response);
  
      const getTopMoviess = await getTopMovies(response);
      console.log(getTopMoviess);
  
      const sendMail = await sendEmail(response.email)
      console.log(sendMail)
    
  }
  
  getData();

  function getCustomer() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Iqbal',
          isPremium: true,
          email: 'iqbal@email.com'
        });
      }, 1000);
    })
  }

  function getTopMovies(customer) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {

        if (customer.isPremium) {
         console.log('Top Movies: ');
         resolve(['movie1', 'movie2']);
      }
      else {
        reject("Customer can not watch Top movies")
      }
    }, 2000)
  })
}
       function sendEmail (email){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve ('Send movie ticket to' +email); 
            }, 3000)
        })
    }


