DB_HOST = "ec2-54-160-120-28.compute-1.amazonaws.com"
DB_NAME = "d74fqpl6qtrn0m"
DB_USER = "bdlzvislimyeil"
DB_PASS = "c72c07abb2838abbfeca8fc6685a6663b18d8fa417a29170dc34b033d87b373f"

import psycopg2
import pandas as pd

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

cur = conn.cursor()


from sqlalchemy import create_engine
# Imports the methods needed to abstract classes into tables
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import MetaData
Base = declarative_base()

# Allow us to declare column types
from sqlalchemy import Column, Integer, String, Float 

print("connected to postgresSQL DB")

#Connect to local database
#rds_connection_string = "postgres:xx05nseW@localhost:5432/yelp_review_db"
#engine = create_engine(f'postgresql://{rds_connection_string}')
#conn2 = engine.connect()

#new1_sb_shanghaijoe_db = pd.read_sql_query('select * from sb_top_reviews1', con2=engine).head(20)
#yelp_most_recom1 = pd.read_csv(r'C:\Users\leroy\Desktop\yelpproject\yelp_seafoodanalysis\data_for_seafood\seabassyelpmostrecom1.csv')

#cur.execute("DROP TABLE student;")

#cur.execute("CREATE TABLE most_recom1 (id SERIAL PRIMARY KEY, word VARCHAR, word_freq VARCHAR);")

#query = """INSERT INTO most_recom1 (Word, word_freq) VALUES (%S, %S)"""

cur.execute("INSERT INTO most_recom1 (Word, word_freq) VALUES ('ABC', 'test1');")

cur.execute("select * from most_recom1;")

conn.commit()

cur.close()

conn.close()



