import psycopg2
class StatusCodes:
    def __init__(self) -> None:
        self.status_code_get = 0
        self.status_code_post = 0 

class QueryUtil :
    def __init__(self) -> None:
        self.status_codes = StatusCodes()
        self.conn = psycopg2.connect(
            host = 'localhost',
            database = 'teachersdata',
            user = 'postgres',
            password = 'post@66'
        )
        self.curr = self.conn.cursor()
        

    def executeGET(self, sqlQuery):
        print("\n--------------------")
        print("executeGET")
        print("Query = ", sqlQuery)
        print("--------------------\n")

        try:
            self.curr.execute(sqlQuery)
            data = self.curr.fetchall()
            if(len(data) == 0): self.status_codes.status_code_get = 204
            else : self.status_codes.status_code_get  = 200
        except Exception as exp:
            print("Exception is = ", exp)
            self.status_codes.status_code_get =400
            
        print("Status code for GET request = ",self.status_codes.status_code_get)

        self.conn.commit()
        return [data, self.status_codes.status_code_get]

    def executePOSTput(self, sqlQuery):
        try:
            print("Query = ", sqlQuery)
            self.curr.execute(sqlQuery)
            self.status_codes.status_code_post = 200
            # self.conn.commit()
        except Exception as exp:
            print("Exception = ", exp)
            self.status_codes.status_code_post = 424


        print("Status code for POST/PUT request = ", self.status_codes.status_code_post)

        self.conn.commit()

        return ["", self.status_codes.status_code_post]
