from flask import Flask, render_template, request, jsonify, send_from_directory
import urllib.parse, os
from NLP.nlp import NLP

app = Flask(__name__, template_folder="views")

# app.jinja_env.add_extension('pypugjs.ext.jinja.PyPugJSExtension')


@app.route("/")
def index():
    return render_template("index.html", title="FAQ Chat")


@app.route("/answer")
def get_answer():
    question = request.args.get("q", "") # q is the question
    if question.strip() != "":
        response = NLP.get_response(question)
        test_reponse = "Flargeboob"
    return jsonify(response=test_response)


if __name__ == "__main__":
    app.run()