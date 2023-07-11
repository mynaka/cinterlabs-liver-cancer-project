# Requirements
Virtual env (sudo apt install python3-virtualenv)

# How to setup
Go to backend dir and type in the following commands:\n
python3 -m venv venv\n
source venv/bin/activate\n
export PYTHONPATH=$PWD\n
pip install -r requirements.txt\n

# To run:
Type in virtual environment:
uvicorn app.main:app --reload