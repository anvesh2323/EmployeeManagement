# from asyncio.windows_events import NULL
import psycopg2

# curr = 
# def connectDB():



class QueryUtil :
    def __init__(self) -> None:
        self.status_code_get = 0
        self.status_code_post = 0  # also for put
        # status_code_put = 0
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
        self.curr.execute(sqlQuery)
        data = self.curr.fetchall()
        if(len(data) == 0): self.status_code_get = 204
        else : self.status_code_get  = 200
        return data

    def executePOSTput(self, sqlQuery):
        try:
            print("Query = ", sqlQuery)
            self.curr.execute(sqlQuery)
            self.status_code_post = 200
            # self.conn.commit()
        except Exception as exp:
            print("Exception = ", exp)
            # self.conn.commit()
            self.status_code_post = 424

