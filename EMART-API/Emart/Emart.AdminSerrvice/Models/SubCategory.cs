using System;
using System.Collections.Generic;

namespace Emart.AdminSerrvice.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
        }

        public string Scid { get; set; }
        public string SubCategoryname { get; set; }
        public string Briefdetails { get; set; }
        public string Gst { get; set; }
        public string Cid { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
