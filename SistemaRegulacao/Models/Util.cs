using System.Security.Cryptography;
using System.Text;

namespace SistemaRegulacao.Models
{
    public class Util
    {
        public static string hash(String input)
        {
            SHA1 sha = new SHA1CryptoServiceProvider();
            byte[] data = Encoding.ASCII.GetBytes(input);
            byte[] hash = sha.ComputeHash(data);

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
    }
}
