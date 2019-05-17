document.querySelector("#testModal").addEventListener("click", e => {
    modal("Object modal yeaah").then(val => {
        if (val) {
            document.querySelector("#answer-text").append(`You clicked Yes\n`);
        } else {
            document
                .querySelector("#answer-text")
                .append(`You clicked Cancel\n`);
        }
    });
});
