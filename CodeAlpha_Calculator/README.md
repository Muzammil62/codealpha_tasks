# Calculator

A simple calculator web app built using HTML, CSS, JavaScript and Flask (Python).

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Clear (AC) button
- Toggle positive/negative sign (+/-)
- Percentage (%) calculation
- Decimal point support
- Keyboard support (type numbers and operators directly)
- Error handling for divide by zero
- Calculation history shown above the result

## Project Structure

```
calculator/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Tech Used

- HTML — structure
- CSS — styling
- JavaScript — calculator logic and keyboard support
- Python (Flask) — backend server to run the app

## How to Run

1. Make sure Python is installed on your system.

2. Install Flask:
```
pip install flask
```

3. Open this folder in VS Code (or any code editor).

4. Open the terminal and run:
```
python app.py
```

5. Open your browser and go to:
```
http://127.0.0.1:5000
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 0-9 | Enter numbers |
| + - * / | Operators |
| Enter or = | Calculate result |
| . | Decimal point |
| Backspace | Delete last digit |
| Escape | Clear all |

## Author

Ibrahim Muzammil
