from flask import Flask, render_template
import pickle
import random
app = Flask(__name__)

with open('data/titles_data.pkl', 'rb') as pickled_data:
    titles_data = pickle.load(pickled_data)

with open('data/titles_model.pkl', 'rb') as pickled_model:
    titles_model = pickle.load(pickled_model)


@app.route("/")
def sekrit_quiz():
    real = random.choice(titles_data)
    print real
    fake = None
    while not fake:
        fake = titles_model.make_sentence()
    order = random.choice([1, 2])
    return render_template('home.html', real=real, fake=fake, order=order)

if __name__ == "__main__":
    app.run(debug=True)
