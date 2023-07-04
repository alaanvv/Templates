import pymysql

class Database:
    def __init__(self, host, port, user, db):
        self.connection = pymysql.connect(host = host, port = port, user = user, db = db)
        self.cursor = self.connection.cursor()

    def register(self, username, password):
      # Check if the user already exists
      self.cursor.execute("SELECT * FROM users WHERE username = %s", (username))
      if self.cursor.fetchone(): return 0
      
      # Creates new user
      self.cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
      
      self.connection.commit()
      self.connection.close()
      
      return 1
    
    def login(self, username, password):
        self.cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = self.cursor.fetchone()
      
        return user[0] if user else 0