var textarea = document.getElementById('new-entry-input');

textarea.addEventListener('focus', function() {
    if (textarea.value === 'start writing @here') {
        textarea.value = '';
    }
});

textarea.addEventListener('blur', function() {
    if (textarea.value === '') {
        textarea.value = 'start writing @here';
    }
});