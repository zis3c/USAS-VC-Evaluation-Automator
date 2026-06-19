(function() {
    // 1. Fill all the dropdown scales to '5'
    const selectElements = document.querySelectorAll('select[name="sel_skala[]"]');
    selectElements.forEach((select) => {
        select.value = "5";
        select.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // 2. Fill all the remarks/catatan textareas with 'Terbaik!'
    const textareas = document.querySelectorAll('textarea[name="sel_catatan[]"]');
    textareas.forEach((textarea) => {
        textarea.value = "Terbaik!";
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    });

    console.log(`%c[✓] Automation complete: ${selectElements.length} scales set to 5, ${textareas.length} remarks set to 'Terbaik!'`, "color: green; font-weight: bold;");
})();