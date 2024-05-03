
using Core.entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Context
{
    public class Connector : IdentityDbContext<AppUser>
    {
        public Connector(DbContextOptions<Connector> options) : base(options)
        {

        }
    }
}
