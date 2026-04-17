from databaseconn import get_connection

try:
    conn = get_connection()
    print("Connection successful!")
    conn.close()
except Exception as e:
    print(f"Connection failed: {e}")