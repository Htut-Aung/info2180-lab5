document.addEventListener("DOMContentLoaded", function () {
    const lookup = document.querySelector("#lookup");
    const country = document.querySelector("#country");
    const result = document.querySelector("#result");

    lookup.addEventListener("click", function () {
        const query = country.value.trim();

        fetch("world.php?country=" + encodeURIComponent(query))
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.log(error);
            });
    });
});
