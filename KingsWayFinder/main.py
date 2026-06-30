# From 'from website import create_app' to 'app.run(host = 0.0.0.0 port = 5001, debug = True)' is code from https://www.youtube.com/watch?v=dam0GPOAvVI (Tech with Tim, Date: 5 years ago in 2026)
from website import create_app

# starts the app 
app = create_app()

# makes sure that the app only runs if this file is run
if __name__ == '__main__':
    # Starts the local web sever
    app.run(debug = True) #NEED TO CHANGE

     