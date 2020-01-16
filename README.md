# Nublaq

### Requirements

- Python (Installing python3.7 for Win here --> https://phoenixnap.com/kb/how-to-install-python-3-windows)
- Pip (Installing Pip for windows --> https://phoenixnap.com/kb/install-pip-windows)
- Virtual environment (Installiing Virtualenv for Windows here -->
                       https://mothergeopy.readthedocs.io/en/latest/development/how-to/venv-win.html)
- NPM (JavaScript Framework)(Installing node for Win --> https://www.guru99.com/download-install-node-js.html)

### Database Technologies
- Postgresql
- google cloud proxy for interacting with staging/prod databases
- Before you can develop, you'll need to install all the things.

First: Docker and docker compose: TODO

Then you'll need to get the backend up and running:

sudo apt install postgresql-server-dev-all

Then the frontend

### Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the [backend] directory: [python manage.py runserver] (You have to run this    command while you are sourced into the virtual environment).
2. Run this command to start the frontend development server in the [frontend] directory: [npm install] (This will start the      frontend on the adddress localhost:3000).

### Built With
- (React)[https://reactjs.org/] - A progressive JavaScript framework.
- Python - A programming language that lets you work quickly and integrate systems more effectively.
- Django - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.


# On Windows use `env\Scripts\activate`
