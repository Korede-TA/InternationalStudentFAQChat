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
    question = urllib.parse(request.args.get('question'))
    if question.strip() != "":
        response = NLP.get_response(question)
    return jsonify(response=response)


''' Serve Static
@app.route('/js/<path:filename>')
def serve_js(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static', 'js'), filename)


@app.route('/css/<path:filename>')
def serve_css(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static', 'css'), filename)
'''

if __name__ == "__main__":
    app.run()