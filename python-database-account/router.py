from flask import request
from database import Database
from valid_pwd import validate

db = Database('localhost', 3306, 'root', 'databse')

def Router(app):  
  @app.route('/')
  def homepage(): 
    return 'Home'

  @app.route('/register', methods = ['POST'])
  def register():
    username = request.form.get('username')
    password = request.form.get('password')

    if not (res := validate(password)): return res
    
    res = db.register(username, password)
    if res: return 'Registered' 
    else: return 'User already exists'

  @app.route('/login', methods = ['POST'])
  def login():
    username = request.form.get('username')
    password = request.form.get('password')
    
    res = db.login(username, password)
    if res: return res
    else: return 'Wrong credentials'
