# Nublaq

### Requirements

- Python (Installing python3.7 for Win here --> https://phoenixnap.com/kb/how-to-install-python-3-windows)
- Pip (Installing Pip for windows --> https://phoenixnap.com/kb/install-pip-windows)
- Pipenv (Installing --> https://medium.com/@mahmudahsan/how-to-use-python-pipenv-in-mac-and-windows-1c6dc87b403e )  

  Pipenv is a production-ready tool that aims to bring the best of all packaging worlds to the Python world. It harnesses
  Pipfile, pip, and virtualenv into one single command. Read More (https://pipenv-fork.readthedocs.io/en/latest/basics.html)

### Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.
1. Run this command to activate the virtual environment in the [Nublaq] base directory: [pipenv shell] (You need to make sure
   that pipenv is installed).
2. Run this command to install all the project dependencies in the [Nublaq] base directory: [pipenv install].
3. Run this command for creating new migrations based on the changes you have made to your models in the [backend] directory
   [python manage.py makemigrations] (You have to run this command while you are sourced into the virtual environment).
4. Run this command for applying and unapplying migrations in the [backend] directory: [python manage.py migrate] (You have to
   run this command while you are sourced into the virtual environment).
5. Run this command to start the backend server in the [backend] directory: [python manage.py runserver] (You have to run this    command while you are sourced into the virtual environment).
6. Run this command to start the frontend development server in the [frontend] directory: [npm install] (This will start the      frontend on the adddress localhost:3000).

### Built With
- (React)[https://reactjs.org/] - A progressive JavaScript framework.
- Python - A programming language that lets you work quickly and integrate systems more effectively.
- Django - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.


# On Windows use `env\Scripts\activate`
