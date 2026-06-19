// ==UserScript==
// @name         USAS VC Evaluation Automator
// @namespace    https://github.com/zis3c/USAS-VC-Evaluation-Automator
// @version      1.0
// @description  Automatically fills out the Course Teaching Evaluation Form on USAS VirtualCampus portal with rating 5 and comment 'Terbaik!'.
// @author       zis3c
// @match        http://vcampus.usas.edu.my/*
// @match        https://vcampus.usas.edu.my/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function init() {
        // Only run if evaluation elements exist
        const hasScales = document.querySelector('select[name="sel_skala[]"]');
        const hasRemarks = document.querySelector('textarea[name="sel_catatan[]"]');
        if (!hasScales && !hasRemarks) return;

        // Create a floating action button
        const btn = document.createElement('button');
        btn.id = 'usas-eval-auto-btn';
        btn.textContent = '⚡ Auto Fill Form';
        btn.style.position = 'fixed';
        btn.style.bottom = '20px';
        btn.style.right = '20px';
        btn.style.zIndex = '99999';
        btn.style.padding = '12px 24px';
        btn.style.backgroundColor = '#10B981'; // Nice emerald green
        btn.style.color = '#FFFFFF';
        btn.style.border = 'none';
        btn.style.borderRadius = '30px';
        btn.style.fontWeight = 'bold';
        btn.style.fontSize = '14px';
        btn.style.boxShadow = '0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.05)';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'all 0.2s ease-in-out';
        btn.style.fontFamily = 'system-ui, -apple-system, sans-serif';

        // Hover effect
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
            btn.style.backgroundColor = '#059669';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
            btn.style.backgroundColor = '#10B981';
        });

        // Click effect
        btn.addEventListener('click', () => {
            const selectElements = document.querySelectorAll('select[name="sel_skala[]"]');
            selectElements.forEach((select) => {
                select.value = "5";
                select.dispatchEvent(new Event('change', { bubbles: true }));
            });

            const textareas = document.querySelectorAll('textarea[name="sel_catatan[]"]');
            textareas.forEach((textarea) => {
                textarea.value = "Terbaik!";
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
            });

            // Visual feedback
            btn.textContent = '✓ Done!';
            btn.style.backgroundColor = '#3B82F6'; // Blue
            btn.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.3)';
            setTimeout(() => {
                btn.textContent = '⚡ Auto Fill Form';
                btn.style.backgroundColor = '#10B981';
                btn.style.boxShadow = '0 10px 15px -3px rgba(16, 185, 129, 0.3)';
            }, 2000);
        });

        document.body.appendChild(btn);
    }

    // Run on load
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        window.addEventListener('DOMContentLoaded', init);
    }
})();
