# Requirements
Virtual env (sudo apt install python3-virtualenv)

# How to setup
Go to backend dir and type in the following command:
python3 -m venv venv &&
source venv/bin/activate


# To run:
Type in virtual environment:
export PYTHONPATH=$PWD && 
pip install -r requirements.txt &&
uvicorn app.main:app --reload