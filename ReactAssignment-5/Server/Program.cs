using FormApp.Manager;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IUserManager, UserManager>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowReactApp",
//         builder => builder
//             .WithOrigins("http://localhost:3000") // React app port
//             .AllowAnyHeader()
//             .AllowAnyMethod());
// });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Form API", Version = "v1" });
});

var app = builder.Build();

app.UseCors("AllowAll");
// app.UseCors("AllowReactApp");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
