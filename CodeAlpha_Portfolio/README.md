# Portfolio Website

A personal portfolio website built using HTML, CSS, JavaScript and Flask (Python), showcasing my skills, projects, education, certifications, and contact information.

## Sections

- **Hero** — Introduction
- **About** — Personal info and bio
- **Skills** — Technical skills, cybersecurity skills, and soft skills with progress bars
- **Projects** — Showcases the Calculator and Scientific Calculator projects
- **Certifications** — TCS and HackerRank certificates
- **Education** — Academic background
- **Contact** — Contact details and a message form

## Features

- Clean, responsive dark theme design
- Smooth scrolling navigation
- Scroll reveal animations
- Animated skill progress bars
- Hover effects on cards and buttons
- Active navigation highlight while scrolling
- Simple contact form with validation

## Project Structure

```
portfolio/
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
- CSS — styling and responsive layout
- JavaScript — scroll animations, nav highlighting, form handling
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

## Deployment

This can also be deployed as a static site (without Flask) on:
- GitHub Pages
- Netlify

Just rename `templates/index.html` to `index.html`, move it to the root folder along with the `static` folder, and upload.

## Author

Ibrahim Muzammil  
BCA Student — Cybersecurity  
Nitte Institute of Professional Education
