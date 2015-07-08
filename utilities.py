import pickle
import csv
import markovify

RECORDS = 'data/titles-33(1)(a).csv'


def pickle_data():
    with open(RECORDS, 'rb') as csv_file:
        records = csv.reader(csv_file)
        titles_data = []
        with open('data/titles_text.txt', 'w') as titles_text:
            for record in records:
                titles_data.append(record)
                titles_text.write(record[3] + '\n')
    with open('data/titles_text.txt', 'r') as titles_text:
        titles_model = markovify.text.NewlineText(titles_text.read())
    with open('data/titles_data.pkl', 'wb') as data_pickle:
        pickle.dump(titles_data, data_pickle)
    with open('data/titles_model.pkl', 'wb') as model_pickle:
        pickle.dump(titles_model, model_pickle)
