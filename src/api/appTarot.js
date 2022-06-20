







// https://github.com/ekelen/tarot-api
// https://rws-cards-api.herokuapp.com/



export const getTarot = () => {
    console.log();

    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
    .then(function (response) {
        return response.json()
        })
        .then(function (response) {
        // handle ten random cards
            })
            .catch(function (error) {
            // handle what went wrong
                });
}