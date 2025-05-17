using FormApp.Models;

namespace FormApp.Manager
{
    public class UserManager : IUserManager
    {
        private static List<User> _users = new List<User>();

        public void AddUser(User user)
        {
            user.Id = _users.Count + 1;
            _users.Add(user);
        }

        public List<User> GetAllUsers()
        {
            return _users;
        }

        public User GetById(int id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }
    }
}
