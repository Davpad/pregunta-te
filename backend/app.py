import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from __init__ import create_app
from models import db
from flask_cors import CORS

app = create_app()
MIGRATE = Migrate(app, db)
CORS(app)

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=False)