window.addEventListener('load', function() {
    var obj = document.querySelector('object'); // select the object element
    if (obj) {
        obj.onload = function() {
            try {
                // adjust the height of the object to match the height of its content
                obj.style.height = obj.contentDocument.body.scrollHeight + 'px';
            } catch (e) {
                console.error('Could not adjust height of object:', e);
            }
        };
    }
});