using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Task.BAL
{
    public class CommonBL
    {
        SqlConnection objSqlConnection;
        public CommonBL()
        {
            ConnectionOpen();
        }
        public void ConnectionOpen()
        {
            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["yourconnectinstringName"].ConnectionString;
                objSqlConnection = new SqlConnection(connectionString);
                objSqlConnection.Open();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void ConnectionClose()
        {
            try
            {
                objSqlConnection.Close();
                objSqlConnection.Dispose();

            }
            catch (Exception)
            {
                objSqlConnection.Close();
                objSqlConnection.Dispose();
                throw;
            }
            finally
            {
                objSqlConnection.Close();
                objSqlConnection.Dispose();
            }
        }
    }
}