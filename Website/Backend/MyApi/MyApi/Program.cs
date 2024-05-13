﻿using Core.Context;
using Core.entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MyApi.Model.Interfaces;
using MyApi.Model.Repositories;
using MyApi.Services;
using System.Text;

namespace MyApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddswaggerDoc();
            
            builder.Services.AddDbContext<Connector>(
                option =>
                    {
                        option.UseSqlServer(builder.Configuration.GetConnectionString("Connector"));
                    }
                );
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme=JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
             .AddJwtBearer(options => {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuerSigningKey = true,
                     
                     IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"])),
                     ValidateIssuer = false,
                     ValidateAudience = false
                 };
     });
            builder.Services.AddAuthorization();
            builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
            {
                options.Tokens.EmailConfirmationTokenProvider= "Default";
            }).AddEntityFrameworkStores<Connector>().AddDefaultTokenProviders();
            
            builder.Services.AddScoped<IUnitOfWork,UnitOfWork>();
            builder.Services.AddScoped<ICource,CourceRepositiory>();
            builder.Services.AddScoped<IUserGroup,UserGroupRepository>();
            builder.Services.AddScoped<IAnnouncement,AnnouncementRepository>();
            builder.Services.AddScoped<INotification, MyApi.Model.Repositories.Notification>();
            builder.Services.AddScoped<ITask, TaskRepository>();
            builder.Services.AddScoped<IUserNotification, MyApi.Model.Repositories.UserNotification>();
            builder.Services.AddScoped<ITopic, TopicRepository>();
            builder.Services.AddScoped<Imaterial, MaterialRepository>();
            builder.Services.AddCors(e =>
                {
                    e.AddPolicy("MyPloicy", policybuilder =>  policybuilder.AllowAnyOrigin().AllowAnyHeader());
                }
            );
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
             app.UseCors("MyPloicy");
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseStaticFiles();

            app.MapControllers();

            app.Run();
        }
    }
}
