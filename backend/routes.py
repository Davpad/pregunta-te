from flask import Blueprint, jsonify, request
from models import db, User, Question
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({'users': [user.serialize() for user in users]}), 200

@api.route('/signup', methods=['POST'])
def create_user():
    request_body = request.json
    user_query = User.query.filter_by(email=request_body['email']).first()
    if user_query is None:
        create_user = User(username=request_body['name'], email=request_body['email'],  password=request_body['password'], is_active=request_body['is_active'])
        db.session.add(create_user)
        db.session.commit()
        response_body = {
            "msg": "User created successfully"
        }
        return jsonify(response_body), 200  
    else:
        response_body = {
            "msg": "User already exists"
        }
        return jsonify(response_body), 404

# LOGIN-------------------------------------------------------------------------------------------------------------------
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_exist = User.query.filter_by(email=email).first()
    print(user_exist)

    if user_exist is None:
        return jsonify({"msg": "Email doesn't exist"}), 404

    if email != user_exist.email or password != user_exist.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200       

@api.route('/questions', methods=['GET'])
def get_questions():
    questions = Question.query.all()
    return jsonify({'questions': [question.serialize() for question in questions]}), 200

# #Enpoint POST añadir un Nueva Pregunta-----------------------------------------------------------------------------------
@api.route("/question", methods=["POST"]) # ¿es necesario poner el id del vendedor?
@jwt_required()
def create_new_question():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    user_id=user.id

    question = request.json.get("question", None)
    category = request.json.get("category", None)
    logo = request.json.get("logo", None)
    answer1 = request.json.get("answer1", None)
    option1 = request.json.get("option1", None)
    answer2 = request.json.get("answer2", None)
    option2 = request.json.get("option2", None)
    answer3 = request.json.get("answer3", None)
    option3 = request.json.get("option3", None)
    reason = request.json.get("reason", None)

    question_exist = Question.query.filter_by(question=question).first()
    # poner error si el nombre ya existe
    if question_exist is None:
        new_question = Question(
            question=question,
            category=category,
            logo=logo,
            answer1=answer1,
            option1=option1,
            answer2=answer2,
            option2=option2,
            answer3=answer3,
            option3=option3,
            reason=reason,
            user_id=user_id,           # es necesario el id para asignar la tienda
        )
        db.session.add(new_question)
        db.session.commit()
        return jsonify({"msg": "Pregunta creada correctamente"}), 200
    else:
        return jsonify({"msg": "La pregunta ya existe"}), 400