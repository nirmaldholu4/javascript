# 🖼️ Image Slider Project

A simple, functional **Image Slider (Carousel)** built using **HTML**, **CSS**, and **JavaScript**. It lets users move between multiple images using Previous (`<`) and Next (`>`) buttons.

---

## 📂 Project Files

| File | Purpose |
|------|---------|
| `project.html` 🧱 | The structure/markup of the slider |
| `project.css` 🎨 | Styling — layout, colors, positioning |
| `project.js` ⚙️ | Logic — image switching, button clicks |

---

## 🎥 Demo Video

[Watch Demo Video](https://drive.google.com/file/d/1F2PVXVlw1vw_fAyL5K9YwskY_aEIXy1C/view?usp=sharing)

---

## ▶️ How to Run

1. 📁 Keep `project.html`, `project.css`, and `project.js` in the same folder.
2. 🌐 Open `project.html` directly in your browser.
3. ✅ Click the `<` and `>` buttons to slide between images.

---

## 🧩 Tasks Performed in This Project

### 1. 🧱 Built the HTML Structure
- Created a main wrapper `<div class="slider">` to hold the whole slider.
- Added an `<h2>` heading: **"Image Slider"**.
- Created a `.main-box` section to act as the image display area.
- Added an `<img id="my-img">` tag to display the current image.
- Added two navigation buttons:
  - `#left-btn` → for the previous image (`<`)
  - `#right-btn` → for the next image (`>`)
- Linked `project.css` for styling and `project.js` for functionality.

### 2. 🎨 Styled the Slider with CSS
- Used `* { margin: 0; padding: 0; box-sizing: border-box; }` for a clean reset across all elements.
- Used **Flexbox** (`display: flex; justify-content: center; align-items: center;`) on `body` to center the slider both horizontally and vertically on the screen.
- Designed the `.slider` box with a white background, padding, border, and rounded corners (`border-radius: 8px`) for a card-like look.
- Set `.main-box` with `position: relative` so buttons can be placed on top of the image.
- Used `object-fit: cover` on `#my-img` so images fill the box neatly without stretching or distortion, regardless of the original image size.
- Styled `.btn` (both buttons) with a black background, white text, no border, and pointer cursor for a clean, clickable look.
- Positioned buttons using `position: absolute` + `top: 50%` + `transform: translateY(-50%)` so they sit perfectly centered on the left and right edges of the image, regardless of image height.

### 3. ⚙️ Added JavaScript Functionality
- Created an `images` array to store the list of image file names used in the slider.
- Declared an `index` variable (starting at `0`) to track which image is currently displayed.
- Used `document.querySelector()` to select the image element and both buttons in the DOM.
- Set the initial image on page load using `myImg.src = images[index]`.

#### ➡️ Next Button Logic
- On clicking `#right-btn`, `index` increases by `1`.
- Added a boundary check: if `index` goes beyond the last image (`index >= images.length`), it resets back to `0` — creating an **infinite loop** effect.
- Updates `myImg.src` to show the new image.

#### ⬅️ Previous Button Logic
- On clicking `#left-btn`, `index` decreases by `1`.
- Added a boundary check: if `index` goes below `0`, it jumps to the last image (`images.length - 1`) — also creating a **seamless loop** in reverse.
- Updates `myImg.src` accordingly.

### 4. ⏱️ Prepared (Optional) Auto-Slide Feature
- Added a `setInterval()` block (currently **commented out**) that would auto-advance the slider every **3 seconds** using the same looping logic as the Next button.
- Can be enabled anytime by uncommenting the code — no extra setup needed.

---

## 🛠️ Tech Stack

- 🧱 **HTML5** — Structure
- 🎨 **CSS3** (Flexbox, positioning) — Styling
- ⚙️ **JavaScript (Vanilla)** — DOM manipulation & event handling

---

## 💡 Possible Future Improvements

- 🔵 Add dots/indicators to show current slide position
- ⌨️ Add keyboard (arrow key) navigation
- 👆 Add swipe support for mobile devices
- ⏯️ Add a play/pause button for the auto-slide feature
