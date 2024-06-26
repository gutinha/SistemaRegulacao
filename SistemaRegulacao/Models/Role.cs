﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SistemaRegulacao.Models
{
    [Table("role")]
    public partial class Role
    {
        public Role()
        {
            Users = new HashSet<User>();
        }

        [Key]
        [Column("id")]
        public long Id { get; set; }
        [Required]
        [Column("name")]
        [StringLength(100)]
        public string Name { get; set; }
        [Column("level")]
        public long Level { get; set; }
        [Column("deleted")]
        public bool Deleted { get; set; }

        [InverseProperty("RoleNavigation")]
        public virtual ICollection<User> Users { get; set; }
    }
}