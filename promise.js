getCustomer()
.then((customer) => {
    console.log(customer);
    getTopMovies(customer)
    .then((movies) => {
        console.log(movies);
        sendEmail (customer.email)
        .then ((message) => {
            console.log(message);

        })  
    })
})

function getCustomer() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Iqbal',
          isPremium: true,
          email: 'iqbal@email.com'
        });
      }, 2000);
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
          reject("Customer can not watch Top Movies")
        }
      }, 4000)
    })
  }
  
  function sendEmail(email) {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Send Movie ticket to ' + email);
    }, 6000)
  })
  } 

// getCustomer(1, (customer) => {
//     console.log('customer: ', customer);
//     if (customer.isPremium) {
//       console.log('Top Movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...');
//       })
//     }
//    });
  
//    function getCustomer(id, callback) {
//     setTimeout(() => {
//       callback({
//         id: 1,
//         name: 'Iqbal',
//         isPremium: true,
//         email: 'email'
//       });
//     }, 4000);
//    }
  
//    function getTopMovies(callback) {
//     setTimeout(() => {
//       callback(['movie1', 'movie2']);
//     }, 3000)
//    }
  
//    function sendEmail(email, movies, callback) {
//     setTimeout(() => {
//       callback();
//     })
//    }