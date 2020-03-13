using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;


namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {
        Items GetItem(string Iid);
        public void AddItem(Items items);
        List<Items> Viewitems(string Sid);
        void Deleteitem(string Iid);
        void Updateitem(Items items);
        List<Category> GetCategory();
        List<SubCategory> GetSubCagegory(string Cid);

    }
}
