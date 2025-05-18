using FormApp.Models;
using System.Collections.Generic;

namespace FormApp.Manager
{
    public interface IUserManager
    {
        List<User> GetAllUsers();
        User GetById(int id);
        void AddUser(User user);
    }
}
