using System;
using System.Collections.Generic;

namespace Emart.AdminSerrvice.Models
{
    public partial class Cart
    {
        public string Cartid { get; set; }
        public string Iid { get; set; }
        public string Bid { get; set; }
        public string Cid { get; set; }
        public string Scid { get; set; }
        public int Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int Stock { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Category C { get; set; }
        public virtual Items I { get; set; }
        public virtual SubCategory Sc { get; set; }
    }
}
