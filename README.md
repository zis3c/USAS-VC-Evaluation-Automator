# USAS VC Evaluation Automator

A lightweight, modern automation utility to streamline filling out the Course Teaching Evaluation Form on the Universiti Sultan Azlan Shah (USAS) VirtualCampus portal (`http://vcampus.usas.edu.my/`).

## Features
- **Interactive UI:** Adds a beautiful, modern floating action button ("Auto Fill Form") to the evaluation page, giving you complete control instead of forcing instant automation.
- **Instant Ratings:** Selects `5` (*SANGAT MEMUASKAN / EXTREMELY SATISFACTORY*) for all evaluation criteria dropdowns in one click.
- **Automatic Remarks:** Populates all comment boxes with a default positive remark (`Terbaik!`).
- **Safe Execution:** Gracefully handles page layouts without crashing or interfering with other page features.

---

## How to Use

### Method 1: Tampermonkey / Userscript (Recommended & Automatic)
1. Install a userscript manager browser extension (e.g., [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)).
2. Install the script by clicking the direct raw link below:
   [Install USAS VC Evaluation Automator](https://raw.githubusercontent.com/zis3c/USAS-VC-Evaluation-Automator/main/usas-vc-evaluation-automator.user.js)
3. Navigate to your evaluation form page on VirtualCampus. The "Auto Fill Form" button will appear in the bottom-right corner!

### Method 2: Browser Console (Quick Copy-Paste)
1. Open the course evaluation page.
2. Press `F12` (or right-click anywhere and select **Inspect**), then click the **Console** tab.
3. Copy the entire contents of [script.js](./script.js), paste it into the console, and press `Enter`.

---

## License
Licensed under the [MIT License](./LICENSE). Feel free to modify and share!