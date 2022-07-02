# from queryExecute import QueryUtil
import queryExecute
from flask import jsonify
# from employee_management_backend.queryExecute import QueryUtil

class ResponseUtil(queryExecute.QueryUtil) :
    def ResponseGET(self,dataObj):
        print("\n--------------------")
        print("ResponseGET")
        print("--------------------\n")
        response = jsonify(dataObj)
        response.headers.add('Access-Control-Allow-Origin','http://localhost:3000')
        response.status_code = self.status_code_get
        self.conn.commit()

        return response
        
    def ResponsePostPut(self):
        response = jsonify()
        response.headers.add('Access-Control-Allow-Origin','http://localhost:3000')           
        response.status_code = self.status_code_post
        self.conn.commit()
        return response