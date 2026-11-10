document.addEventListener("DOMContentLoaded", function () {
    const lookup = document.querySelector("#lookup");
    const lookupCities = document.querySelector("#lookup-cities");
    const country = document.querySelector("#country");
    const result = document.querySelector("#result");

    function searchCountry(cities = false) {
        const query = country.value.trim();

        let url = "world.php?country=" + encodeURIComponent(query);

        if (cities) {
            url += "&lookup=cities";
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.log(error);
                result.textContent = "An error occurred.";
            });
    }

    lookup.addEventListener("click", function () {
        searchCountry();
    });

    lookupCities.addEventListener("click", function () {
        searchCountry(true);
    });
});
