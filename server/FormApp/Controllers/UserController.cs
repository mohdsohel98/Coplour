using Microsoft.AspNetCore.Mvc;
using FormApp.Manager;
using FormApp.Models;

namespace FormApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("getAll")]
        public IActionResult GetAllUsers()
        {
            var users = _userManager.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userManager.GetById(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost("add")]
        public IActionResult AddUser([FromBody] User user)
        {
            if (user == null)
                return BadRequest("User data is null");

            _userManager.AddUser(user);
            return Ok(new { message = "User added successfully" });
        }
    }
}
