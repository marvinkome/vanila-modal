function htmlModal() {
    // get trigger buttons
    const triggerButtons = document.querySelectorAll("button[data-trigger]");

    // add event listener for each
    triggerButtons.forEach(button => {
        button.addEventListener("click", e => {
            // get the modal target
            const modalId = button.getAttribute("data-target");

            // open modal
            const modal = document.getElementById(modalId);
            modal.style.display = "block";

            // add listener to close modal
            window.onclick = e => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            };

            // get modal close button
            const closeBtn = modal.querySelectorAll("button[data-dismiss]");
            closeBtn.forEach(btn => {
                btn.addEventListener("click", e => {
                    // get the modal target
                    const modalId = btn.getAttribute("data-dismiss");
                    // close modal
                    const modal = document.getElementById(modalId);
                    modal.style.display = "none";
                });
            });
        });
    });
}

function createModal(id, message) {
    let modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
        <div id="${id}" class="modal open">
            <div class="modal-content">
                <div class="modal-message">
                    ${message}
                </div>

                <div class="modal-actions">
                    <button data-option="yes">Yes</button>
                    <button data-option="no">Cancel</button>
                </div>
            </div>
        </div>`;

    document.getElementById("modalObj").append(modalContainer);
    return {
        modal: modalContainer.querySelector(`#${id}`),
        container: modalContainer
    };
}

// init html modal
htmlModal();

function modalComponent(message, resolve, reject) {
    const id = `randid-${Math.floor(Math.random() * 100)}`;

    // show modal with id
    const { modal, container } = createModal(id, message);

    // assign null to result for now
    let result = null;

    // add listener to close modal
    window.onclick = e => {
        if (e.target === modal) {
            resolve(false);
            document.getElementById("modalObj").removeChild(container);
        }
    };

    // get modal options button
    const optionsBtn = modal.querySelectorAll("button[data-option]");

    optionsBtn.forEach(btn => {
        btn.addEventListener("click", e => {
            // get the chosen option
            const option = btn.getAttribute("data-option");

            // handle option
            if (option === "yes") {
                resolve(true);
            } else {
                resolve(false);
            }

            // destroy modal
            document.getElementById("modalObj").removeChild(container);
        });
    });
}

window.modal = function(message) {
    return new Promise(function(resolve, reject) {
        return modalComponent(message, resolve, reject);
    });
};
