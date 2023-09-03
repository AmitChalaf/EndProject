from src.myApp import app
from src.create_app import init_app
from src.create_db import create_tables, insert_data
import os
# LOCK_FILE = "temp/lock"

# def deploy():
#     init_app()
#     # create_tables()
#     # insert_data()

# if __name__ == '__main__':
# try:
#     with open(LOCK_FILE, 'x'):
#         deploy()
#         app.run(debug=True, host="0.0.0.0", port=8000)
# except Exception as e:
#     print(e)   
#     init_app()
#     app.run(debug=True, host="0.0.0.0", port=8000)

if __name__ == '__main__' :
    init_app()
    app.run(debug=True, host='0.0.0.0', port=5000)
    
