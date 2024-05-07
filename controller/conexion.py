import mysql.connector

conexion = mysql.connector.connect(user="root",password="",
                                   host="localhost",
                                   database="bd_ventas",
                                   port="3306")
print(conexion)