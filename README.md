# Vanilla Modal Popup

# How to use

```html
<!-- trigger btn -->
<button data-trigger="modal" data-target="modal">Trigger Modal</button>

<!-- modal -->
<div class="modal" id="modal">
    <div class="modal-content">
        <div class="modal-message">
            A modal confirmation onfirmation dialog. And it has a main message
        </div>

        <div class="modal-actions">
            <button>Yes</button>
            <button data-dismiss="modal">Cancel</button>
        </div>
    </div>
</div>
```

or with JS

```js
modal("Cool Modal Yeah!!!").then(val => {
    if (val) {
        // do something after accepting
    } else {
        // do something after cancelling
    }
});
```
