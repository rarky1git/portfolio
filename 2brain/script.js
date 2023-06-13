window.addEventListener('load', function() {
    var objs = document.querySelectorAll('object'); // select all object elements

    objs.forEach(function(obj) {
        obj.onload = function() {
            try {
                // adjust the height of the object to match the height of its content
                obj.style.height = obj.contentDocument.body.scrollHeight + 'px';
            } catch (e) {
                console.error('Could not adjust height of object:', e);
            }
        };
    });
});
