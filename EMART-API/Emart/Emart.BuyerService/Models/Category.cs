using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Category
    {
        public Category()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public string Cid { get; set; }
        public string Categoryname { get; set; }
        public string Briefdetails { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
