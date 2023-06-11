from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb+srv://rohansah202:d9DPUL3fbqF5wSPG@cluster0.rthfzyv.mongodb.net/")

database = client.get_database("test")
tracking_db = database.tracking_db

app = Flask(__name__)
CORS(app)

@app.route('/tracking/<string:today_date>')
def update_login(today_date):
    format = "%d-%m-%Y" 
    assist_people = []
    results = tracking_db.find()
    print(">>>>>>>", results)

    # Print the retrieved documents
    for doc in results:
        print("hi", doc)
        recent_date = datetime.strptime(doc.get("date"), format).date()
        today = datetime.strptime(today_date, "%d-%m-%Y").date()

        print(">>>>>>>>>>>", recent_date, today, "<<<<<<<<<<<<<<<<")

        # Calculate the number of days between the two dates
        diff = recent_date - today
        num_days = diff.days

        print(diff.days)

        if num_days > 45:
            person = {
                "name": doc.get("name"),
                "no_of_days": num_days
            }
            assist_people.append(person)

    return jsonify(assist_people)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
