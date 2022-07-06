# from encodings import utf_8
# from re import T
# from types import MethodType
from http.client import responses
import imp
from itertools import tee
import re
from unicodedata import name
from urllib import response
# from urllib import response
from flask import Flask, jsonify;
from flask import request;
# import os
import json
# import simplejson
import psycopg2
from getResponse import ResponseUtil
from queryExecute import QueryUtil



class Teacher(dict):     # Derived Class from Dictionary (acts as a Base class)
    def __init__(self,id, name, gender, dob, address, note):
        dict.__init__(self, id = id, name = name, gender = gender, dob = dob,  address = address, note = note)

        # self.id = id,
        # self.name = name, 
        # self.address = address,
        # self.dob = dob

    # def change(self, id):
    #     self["id"] = id


# curr.execute('DROP TABLE IF EXISTS teachers;')
# curr.execute('DROP TABLE IF EXISTS teaching_details;')
# curr.execute('CREATE TABLE teachers ( id INT NOT NULL PRIMARY KEY,'
#                                           'name VARCHAR(40),'
#                                           'address VARCHAR(150),'
#                                           'dob VARCHAR(11)' 
#                                     ');'
#             )

# curr.execute('CREATE TABLE teaching_details( standard INT, '
#                                              'subject VARCHAR(20),'
#                                              'id INT,'
#                                              'FOREIGN KEY(id) REFERENCES teachers(id)'
#                                           ');'  
#             )

app = Flask(__name__)


@app.route("/")
def helloword():
    return "Hello"

@app.route("/cartItems")
def CartItems():
    sqlQuery = 'SELECT * from teachers;'
    query_obj = QueryUtil()
    returned_query_data = query_obj.executeGET(sqlQuery) # returns TUPLE
    teacher = returned_query_data[0] 
    teacher_obj = []  # to store the teacher TUPLE interms of LIST
    for i in range(len(teacher)):
        teacher_obj.append(Teacher(teacher[i][0], teacher[i][1], teacher[i][2], teacher[i][3], teacher[i][4], teacher[i][5]))
    
    print("\n--------------------")
    print("CartItems")
    print("--------------------\n")
    response_obj = ResponseUtil()
    return response_obj.Response(teacher_obj, returned_query_data[1])

    


@app.route("/addItem", methods = ["POST"])
def AddItem():
    data = request.get_data()   # receives the data sent by the user (here we received data from the Body) 

    teacher_data = request.data.decode('UTF-8')  # initialy "data" will be in Binary, here we will be converting it to String
    teacher_data_json = json.loads(teacher_data)  # converting the string into JSON (since "data" is in json format)
    query = f"INSERT INTO teachers(name, gender, dob, address, note) values ('{teacher_data_json['name']}', '{teacher_data_json['gender']}', '{teacher_data_json['dob']}', '{teacher_data_json['address']}', '{teacher_data_json['note']}' ); "

    query_obj = QueryUtil()
    returned_query_data = query_obj.executePOSTput(query)
    response_obj = ResponseUtil()
    return response_obj.Response([],returned_query_data[1])

"""

@app.route("/deleteItem", methods = ['DELETE'])
def deleteItem():
    data = request.get_data()

    teacher_data = request.data.decode('UTF-8')

    teacher_data_json = json.loads(teacher_data)
    # print(teacher_data_json["id"])
    
    # search_query = f"SELECT * FROM teachers WHERE name = {teacher_data_json['name'];"
    curr.execute('SELECT * FROM teachers WHERE id = %s;', (teacher_data_json['id']))

    response = jsonify()

    if(curr.rowcount > 0):
        query = f"DELETE FROM teachers WHERE id = {teacher_data_json['id']} ;"  # f is string format
        curr.execute(query)

        response.status_code =  204

        conn.commit()
    else:
        response.status_code = 404
        # return "", 404
    
    response.headers.add('Access-Content-Allow-Origin', 'http://localhost:3000')
    return response


@app.route("/updateListItem", methods = ["PUT"])
def updateListItem():
    data = request.get_data()

    teacher_obj = request.data.decode("UTF-8")

    teacher_obj_json = json.loads(teacher_obj)
    query = f"UPDATE teachers SET name = '{teacher_obj_json['name']}', address = '{teacher_obj_json['address']}', dob = '{teacher_obj_json['dob']}' WHERE id = {teacher_obj_json['id']};"

    curr.execute(query)

    conn.commit()

    response = jsonify()
    response.headers.add('Access-Content-Allow-Origin', 'http://localhost:3000')
    response.status_code = 204
    return response

@app.route("/allCartItems")
def allCartItems():
    return 4


@app.route("/searchItem")
def searchItem():
    data = request.get_data()

    teacher_data = request.data.decode("UTF-8")

    teacher_data_json = json.loads(teacher_data)

    # print(teacher_data_json['id'])

    query = f"SELECT * FROM teachers WHERE name = '{teacher_data_json['name']}'; "

    # requested_teacher_data = []
    # print("query is = ", query)

    print("DONE SEARCH\n\n")
    curr.execute(query)
    requested_teacher_data = curr.fetchall()

    if(len(requested_teacher_data) == 0):
        return "", 404

    requested_teacher_data_obj = []

    for i in range(len(requested_teacher_data)):
        requested_teacher_data_obj.append(Teacher(i, requested_teacher_data[i][1], requested_teacher_data[i][2], requested_teacher_data[i][3])) 


    print(requested_teacher_data_obj)

    return json.dumps(requested_teacher_data_obj), 200

# print(CartItems())




"""
if __name__ == '__main__':
    app.run(port=5001, host = "0.0.0.0", debug=True)





"""
CartITems = No items present
AddEmployee = Item already exist
deleteItem = user doesnt exist
searchItem = user doesnt exist
"""











