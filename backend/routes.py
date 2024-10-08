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
        create_user = User(username=request_body['username'], email=request_body['email'],  password=request_body['password'])
        db.session.add(create_user)
        db.session.commit()
        access_token = create_access_token(identity=request_body['email'])
        return jsonify(access_token=access_token),200  
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

# #Enpoint PUT editar una pregunta-----------------------------------------------------------------------------------
@api.route("/question/<int:question_id>", methods=["PUT"])
@jwt_required()
def update_question(question_id):
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    user_id=user.id

    question_update = request.json.get("question")
    category_update = request.json.get("category")
    logo_update = request.json.get("logo")
    answer1_update = request.json.get("answer1")
    option1_update = request.json.get("option1")
    answer2_update = request.json.get("answer2")
    option2_update = request.json.get("option2")
    answer3_update = request.json.get("answer3")
    option3_update = request.json.get("option3")
    reason_update = request.json.get("reason")

    question_exist = Question.query.filter_by(id=question_id, user_id=user_id).first()
    # poner error si el nombre ya existe
    if question_exist is None:
        return jsonify({"msg": "La pregunta no existe"}), 400
    else:
        question_exist.question=question_update,
        question_exist.category=category_update,
        question_exist.logo=logo_update,
        question_exist.answer1=answer1_update,
        question_exist.option1=option1_update,
        question_exist.answer2=answer2_update,
        question_exist.option2=option2_update,
        question_exist.answer3=answer3_update,
        question_exist.option3=option3_update,
        question_exist.reason=reason_update,
        db.session.commit()
        return jsonify({"msg": "Pregunta actualizada correctamente"}), 200

# #Enpoint DELETE eliminar una Pregunta-----------------------------------------------------------------------------------
@api.route('/question/<int:question_id>', methods=['DELETE'])
@jwt_required()
def delete_question(question_id):
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    user_id=user.id
    check_question = Question.query.filter_by(id=question_id, user_id=user_id).first()
    if check_question is None:
        return jsonify({"msg" : "La pregunta no existe en este usuario"}), 404
    else:
        db.session.delete(check_question)
        db.session.commit()
        return jsonify({"msg" : "Pregunta eliminada en este usuario"}), 200