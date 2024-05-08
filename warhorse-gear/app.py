from flask import Flask, request, jsonify
from flask_cors import CORS

import os
from dotenv import load_dotenv

from db import Product, Database, User
import smtplib

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.secret_key = os.urandom(24)

load_dotenv(".env")
database = Database(os.getenv("DB_PSWD"))