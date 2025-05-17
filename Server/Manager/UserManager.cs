using FormApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace FormApp.Manager
{
    public class UserManager : IUserManager
    {
        private static List<User> _users = new();

        public void AddUser(User user)
        {
            // Simple incremental ID
            user.Id = _users.Count > 0 ? _users.Max(u => u.Id) + 1 : 1;
            _users.Add(user);
        }

        public List<User> GetAllUsers() => _users;

        public User GetById(int id) => _users.FirstOrDefault(u => u.Id == id);
    }
}
