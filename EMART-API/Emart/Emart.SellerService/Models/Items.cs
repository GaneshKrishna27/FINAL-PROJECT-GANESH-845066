using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Iid { get; set; }
        public int Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int Stock { get; set; }
        public string Remarks { get; set; }
        public string Sid { get; set; }
        public string Cid { get; set; }
        public string Scid { get; set; }
        public string Image { get; set; }

        public virtual Category C { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory Sc { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
