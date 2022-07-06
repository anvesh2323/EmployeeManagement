# from queryExecute import QueryUtil
# import queryExecute
from flask import jsonify
# from employee_management_backend.queryExecute import QueryUtil
 
class ResponseUtil :
    def Response(self,dataObj, status_code_get):
        print("\n--------------------")
        print("Response")
        print("--------------------\n")
        response = jsonify(dataObj)
        response.headers.add('Access-Control-Allow-Origin','http://localhost:3000')
        response.status_code = status_code_get
        # self.conn.commit()

        return response
        
    # def ResponsePostPut(self, status_code_post):
    #     response = jsonify()
    #     response.headers.add('Access-Control-Allow-Origin','http://localhost:3000')           
    #     response.status_code = status_code_post
    #     # self.conn.commit()
    #     return response

        