from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import ObjectId

class Product:
    def __init__(self, title, price, description):
        self.title = title
        self.price = price
        self.description = description

class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

class Database:
    def __init__(self, db_pswd):
        uri = f"mongodb+srv://cs35L:{db_pswd}@linewaiter.uoiweiz.mongodb.net/?retryWrites=true&w=majority&appName=LineWaiter"
        self.client = MongoClient(uri, server_api=ServerApi('1'))
        self.db = self.client['linewaiter']
        try:
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print("db.py initialization error")
            print(e)

