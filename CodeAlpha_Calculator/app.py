# app.py - main Python file to run the calculator app
# using Flask to serve the HTML page

from flask import Flask, render_template

app = Flask(__name__)

# home route - loads the calculator page
@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
