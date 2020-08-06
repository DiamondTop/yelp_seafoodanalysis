# import necessary libraries
import os



import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template, request, redirect
from sqlalchemy.sql import func
import pandas as pd

from flask_sqlalchemy import SQLAlchemy
import plotly.graph_objects as go


# create instance of Flask app
app = Flask(__name__)


#################################################
# Database Setup
#################################################


#Connect to local database
#rds_connection_string = "postgres:2305nseW@localhost:5432/yelp_review_db"
#engine = create_engine(f'postgresql://{rds_connection_string}')


#game_database_path = "postgres:2305nseW@localhost:5432/gaming_db"
#engine = create_engine(f"postgresql://{game_database_path}")

rds_connection_string = "postgres:2305nseW@localhost:5432/yelp_review_db"
engine = create_engine(f'postgresql://{rds_connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Declaring tables into variables(Save references to each table)
#p= Base.classes.primaryv1
#g = Base.classes.genre
# gm=Base.classes.game_mode
#t=Base.classes.theme
# f=Base.classes.franchise
# age_des=Base.classes.age_description
# age_rating=Base.classes.age_rating
# similar=Base.classes.similar_game
# art=Base.classes.artwork 
ip=Base.classes.new3_sb_IppudoWestside_db #data base for Eataly Flatiron most reviewed no.2
et=Base.classes.new2_sb_EatalyFlatiron_db #data base for Eataly Flatiron most reviewed no.2
tr=Base.classes.new1_sb_shanghaijoe_db #data base for shanghai joe most reviewed no.1
sgr=Base.classes.toprevframes #data base for overall results top 3 most reviewed
#ns=Base.classes.yelp_dataseabassframereviewsfinal2
#ns=Base.classes.new_simil

# gmr=Base.classes.gamemode_rating

# instantiate the SQLAlchemy object
session = Session(engine)


@app.route("/similar_games")
def topreviews():
    results3 = session.query(sgr.id, sgr.word, sgr.word_freq).\
        order_by(sgr.word_freq.desc()).\
        filter(sgr.word != None).\
        limit(59).all()
    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist()
    # generate the bar chart here
    data2 = {
        'x': word_freq,
        'y': word,
        "type": "bar"
        }
    return jsonify(data2) 




@app.route("/emoji_char")
def emoji_char_data():
    """Return emoji score and emoji char"""

    # Query for the top 10 Shanghai joe data
    results3 = session.query(sgr.id, sgr.word, sgr.word_freq).\
        order_by(sgr.word_freq.desc()).\
        filter(sgr.word != None).\
        limit(15).all()

    # Create lists from the query results
    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist()

    # Generate the plot trace
    trace = {
        "x": word,
        "y": word_freq,
        "type": "bar"
    }
    return jsonify(trace)


@app.route("/word_id")
def emoji_id_data():
    """Return emoji score and emoji id"""

    # Query for the emoji data using pandas
    results3 = session.query(et.id, et.word, et.word_freq).\
        order_by(et.word_freq.desc()).\
        filter(et.word != None).\
        limit(15).all()

    # Create lists from the query results
    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist()    

    # Format the data for Plotly
    trace = {
        "x": df["word"].values.tolist(),
        "y": df["word_freq"].values.tolist(),
        "type": "bar"
    }
    return jsonify(trace)


@app.route("/emoji_name")
def emoji_name_data():
    """Return emoji score and emoji name"""

    # Query for the emoji data using pandas
    results3 = session.query(ip.id, ip.word, ip.word_freq).\
        order_by(ip.word_freq.desc()).\
        filter(ip.word != None).\
        limit(15).all()
    
   

    # Create lists from the query results
    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist()    

    # Format the data for Plotly
    trace = {
        "x": df["word"].values.tolist(),
        "y": df["word_freq"].values.tolist(),
        "type": "bar"
    }
    return jsonify(trace)




# @app.route("/line")
# def test():
#     data = [{
#         "x": [1, 2, 3, 4, 5],
#         "y": [1, 2, 4, 8, 16]}]

#     return jsonify(data)





# app.config["SQLALCHEMY_DATABASE_URI"] = engine
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

# db = SQLAlchemy(app)


# Save references to each table
Samples_Metadata = Base.classes.toprevframes
Samples = Base.classes.new1_sb_shanghaijoe_db



@app.route("/names")
def names():
    """Return a list of sample names."""
    
# Query for the emoji data using pandas
    results3 = session.query(sgr.id, sgr.word, sgr.word_freq).\
        order_by(sgr.word.desc()).\
        filter(sgr.word != None).\
        limit(59).all()

    # Create lists from the query results
    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist()    

   
    # Return a list of the column names (sample words)
    return jsonify(word)

@app.route("/metadata/<word>")
def sample_metadata(word):
    """Return the MetaData for a given sample."""
    sel = [
        Samples_Metadata.word,
        Samples_Metadata.word_freq,
        Samples_Metadata.id,    
    ]

    results = session.query(sgr.id, sgr.word, sgr.word_freq).\
        order_by(sgr.word.desc()).\
        filter(sgr.word == word).all()
    

    # Create a dictionary entry for each row of metadata information
    sample_metadata = {}
    for result in results:
        sample_metadata["word"] = result[0]
        sample_metadata["word_freq"] = result[1]
        sample_metadata["id"] = result[2]
        

    print(sample_metadata)
    return jsonify(sample_metadata)


@app.route("/samples/<sample>")
def samples(sample):
    """Return `otu_ids`, `otu_labels`,and `sample_values`."""
    results3 = session.query(sgr.id, sgr.word, sgr.word_freq).\
        order_by(sgr.word.desc()).\
        filter(sgr.word != None).\
        limit(59).all()

    df = pd.DataFrame(results3, columns=['id','word', 'word_freq'])
    id = df['id'].values.tolist()
    word = df['word'].values.tolist()
    word_freq = df['word_freq'].values.tolist() 

    # Filter the data based on the sample number and
    # only keep rows with values above 1
    sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]

    # Sort by sample
    sample_data.sort_values(by=sample, ascending=False, inplace=True)

    # Format the data to send as json
    data = {
        "otu_ids": df['id'].values.tolist(),
        "sample_values": df['word'][sample].values.tolist(),
        "otu_labels": df['word_freq'].values.tolist() ,
    }
    return jsonify(data)

    


# create route that renders index.html template
@app.route("/")
def home():
    """Render Home page"""
    return render_template("index.html")



# Bonus add a new route
@app.route("/bonus")
def bonus():

    return render_template("bonus.html")

# Bonus add a new route
@app.route("/testing")
def testing():

    return render_template("testing.html")

@app.route("/dashboard")
def dashboard():
    """Render Home page"""
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)
