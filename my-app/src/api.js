export const fetchRatesApi = () => {
    const options = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    };
   return fetch(`https://exchangesos.herokuapp.com/api/all`, options).then((res) => console.log(res.json()))
//     if (res.status === 401) {
//       return {
//         ok: false,
//         user: null,
//       };
//     }
//     return res.json().then(data => ({
//       ok: true,
//       data,
//     }));
//   });
};