using System.Net.NetworkInformation;

namespace SistemaRegulacao.Models.Manager
{
    public class UserManager
    {
        public static List<User> GetAllUsers()
        {
            using (dbContext db = new dbContext())
            {
                return db.Users.Where(x => x.Active == true).ToList();
            }
        }

        public static void CreateUser(User user)
        {
            using (dbContext db = new dbContext())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        user.Active = true;
                        user.CreatedAt = DateTime.Now;
                        var pass = Util.hash(user.Email + user.Password);
                        user.Password = pass;
                        db.Users.Add(user);
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                        throw new Exception();
                    }
                }
            }
        }

        public static List<Role> GetRoles()
        {
            using (dbContext db = new dbContext())
            {
                return db.Roles.Where(x => x.Deleted == false && x.Name != "Admin").ToList();
            }
        }

        public static User FindUserById(int id)
        {
            using (dbContext db = new dbContext())
            {
                return db.Users.Where(x => x.Id == id).First();
            }
        }

        public static User FindUserByName(string name)
        {
            using (dbContext db = new dbContext())
            {
                return db.Users.Where(x => x.Name == name).First();
            }
        }

        public static string CapitalizarNome(string nome)
        {
            string[] excecoes = new string[] { "e", "de", "da", "das", "do", "dos" };
            var palavras = new Queue<string>();
            foreach (var palavra in nome.Split(' '))
            {
                if (!string.IsNullOrEmpty(palavra))
                {
                    var emMinusculo = palavra.ToLower();
                    var letras = emMinusculo.ToCharArray();
                    if (!excecoes.Contains(emMinusculo)) letras[0] = char.ToUpper(letras[0]);
                    palavras.Enqueue(new string(letras));
                }
            }

            return string.Join(" ", palavras);
        }


    }
}
