# Import
from flask import Flask
from router import Router

# App
app = Flask('Filepedia')
Router(app)

app.run(port=667)