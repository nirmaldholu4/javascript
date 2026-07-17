# 🎯 ✨ JAVASCRIPT QUIZ APP ✨

### ✨ Requirements & Specification Document

A fun, interactive **Quiz Application** built using **HTML, CSS, and JavaScript**, featuring DOM Manipulation ⚙️, a live Timer ⏱️, and automatic Result Calculation 📊.

---

## 🎯 Objective

> Create a Quiz Application using **HTML**, **CSS**, and **JavaScript** with DOM Manipulation, Timer, and Result Calculation.

---

## 1️⃣ Quiz Screen 🖥️

- 📌 Display **one question at a time**
- 🔢 Each question should have **4 options**
- 🔘 Use **Radio Buttons** for answers

---

## 2️⃣ Questions ❓

- 📝 Create **10 Multiple Choice Questions**
- 🗂️ Store all questions inside a **JavaScript array of objects**

### 💡 Example:

```javascript
{
  question: "What is JavaScript?",
  options: [
    "Programming Language",
    "Database",
    "Browser",
    "Operating System"
  ],
  answer: "Programming Language"
}
```

---

## 3️⃣ Timer ⏱️

- ⏳ Total Quiz Time: **60 Seconds**
- 🔝 Display timer at the top
- ⬇️ Timer should decrease every second
- 🚨 If timer reaches **0**, submit the quiz automatically

---

## 4️⃣ Navigation 🧭

### 🔘 Buttons:
- ⬅️ Previous
- ➡️ Next
- ✅ Submit

### 📏 Rules:
- 🚫 Previous should **not** work on the first question
- 🚫 Next should **not** work on the last question
- ✅ Submit button should appear on the **last question**

---

## 5️⃣ DOM Manipulation 🛠️

Use JavaScript DOM to:

- 🖼️ Display question
- 🎛️ Display options
- 🔄 Change question
- ⏱️ Show timer
- 🏆 Show score
- ✔️ Update selected answer

---

## 6️⃣ Result Screen 🏁

### 📋 After Submit, show:
- 📊 Total Questions
- ✍️ Attempted Questions
- ✅ Correct Answers
- ❌ Wrong Answers
- 🏆 Final Score
- 📈 Percentage
- 🎉 Pass / Fail

### 💡 Example:

```
Total Questions : 10
Attempted       : 10
Correct         : 8
Wrong           : 2

Score      : 8/10
Percentage : 80%

Result     : PASS ✅
```

### 🥇 Pass Criteria:

| Condition | Result |
|-----------|--------|
| 🟢 40% or above | **PASS** ✅ |
| 🔴 Below 40% | **FAIL** ❌ |

---

## 🎁 Bonus Challenge

- 🔀 Randomize question order
- 🔀 Randomize option order
- 🔁 Add a **Restart Quiz** button
- 👀 Show correct answer after submission
- 📶 Add a **Progress Bar**
- 💾 Save Highest Score using **Local Storage**
- 🚫 Prevent multiple submissions
- ⏰ Show **"Time's Up!"** message when timer ends automatically

### 🎨 Highlight Rules:
- 🟩 **Green** → Correct
- 🟥 **Red** → Wrong

---

## 🎨 Color Palette

Colors used across the Quiz App UI, along with where they are applied:

| Swatch | Name | Used For |
|--------|------|----------|
| 🟪 | Deep Indigo | Header background, headings |
| 🟦 | Primary Purple | Buttons, links, timer gradient start, focus border |
| 🟣 | Deep Violet | Body gradient end, restart button, headings accent |
| 🔵 | Light Lavender | Option hover border |
| ⬜ | Selected Blue Bg | Selected option background |
| ⬜ | Option Border | Default option / card border |
| ⬜ | Hover Bg | Option hover background |
| 🟩 | Success Green | Submit button, correct badge accent |
| 🟢 | Correct Bg | Correct answer highlight background |
| 🟢 | Correct Text | Correct answer text / PASS badge text |
| 🟥 | Danger Red | Wrong answer border |
| 🔴 | Wrong Bg | Wrong answer highlight background |
| 🔴 | Wrong Text | Wrong answer text / FAIL badge text |
| 🔴 | Timer Red | Timer badge background (normal) |
| 🔴 | Timer Alert Red | Timer badge background (last 10s, pulsing) |
| 🟡 | Warning Amber Bg | "Time's Up!" banner background |
| 🟠 | Warning Amber Tx | "Time's Up!" banner text |
| ⚪ | Neutral Grey Btn | Previous button background |
| ⚫ | Neutral Grey Tx | Previous button text |
| ⬜ | Card Grey Bg | Result stat cards background |
| ⬜ | Muted Text | Labels, captions, helper text |
| ⬜ | White | Card backgrounds, text on dark surfaces |

> 🎨 *Exact hex codes are available in the original spec document.*

---

## 🛠️ Tech Stack

- 🟧 **HTML5** — Structure
- 🟦 **CSS3** — Styling & Color Palette
- 🟨 **JavaScript (Vanilla)** — Logic, DOM Manipulation, Timer, Scoring

---

## 🚀 How It Works (Flow)

1. 🏁 Quiz starts → Timer begins (60s)
2. ❓ One question shown at a time with 4 radio options
3. 🧭 User navigates using Previous / Next
4. ✅ On the last question, Submit button appears
5. 🧮 Score is calculated automatically
6. 🏆 Result screen shows stats + Pass/Fail

---

## 📌 Status

🚧 **In Development** — Follow the spec above to build feature by feature!

---

<p align="center">Made with 💜 using HTML, CSS & JavaScript</p>

---

## 🎥 Project Video

🔗 [Watch Video Here](https://drive.google.com/file/d/11hl7riPImP7D33rdb8fuROTyM2MexKVR/view?usp=sharing)
