# Import
from flask import Flask
from router import Router

# App
app = Flask('AppName')
Router(app)

app.run(port=667)
