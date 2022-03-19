export async function getGistData() {
    const dataSource = {
        "dataSource": "Cluster0",
        "database": "resume-mdb",
        "collection": "work"
    };
    
    const url = 'https://data.mongodb-api.com/app/data-idhmq/endpoint/data/beta/action/find'
    // fetch(url, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //         'Access-Control-Request-Headers' : '*',
    //         'api-key' : 'uPwkjrBBvHDVJmaVbjXkKZjWLFVRWL2BeZ3yUFsXafaDCQv40UUVej6w5Rm86QvP'
    //     },
    //     body: dataSource
    // })
    // .then(resp => {
    //     console.log(resp);
    //     // return resp
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    fetch(url, {
        method: "post",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Request-Headers" : "*",
            "api-key" : "uPwkjrBBvHDVJmaVbjXkKZjWLFVRWL2BeZ3yUFsXafaDCQv40UUVej6w5Rm86QvP"
        },
        body: 'foo=bar&lorem=ipsum'
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });

}

