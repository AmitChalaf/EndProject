from routes.csuRoutes import setup_csuRoutes
from routes.facadesRoutes import setup_facadesRoutes
from bluePrints.facadesBp import setup_FacadesBp
from bluePrints.csuBp import setup_csuBp
from flask_cors import CORS
from src.config import Config
from src.myApp import app, db, bcrypt, login_manager

def init_app():
    # App configuration 
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    CORS(app)
    
    # Register routes and blueprints
    app.add_url_rule('/', methods=['GET'], view_func=lambda:"hello world")
    setup_csuRoutes()
    setup_facadesRoutes()
    setup_FacadesBp()
    setup_csuBp()

    login_manager.login_view = 'csuRoutes.login'

    app.app_context().push()