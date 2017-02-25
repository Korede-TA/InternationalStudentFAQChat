from flask import Flask, render_template
app = Flask(__name__, template_folder="views")

app.jinja_env.add_extension('pypugjs.ext.jinja.PyPugJSExtension')

@app.route("/")
def index():
    return render_template("index.pug", title="FAQ Chat")

@app.route("/answer")
def get_answer():
    pass