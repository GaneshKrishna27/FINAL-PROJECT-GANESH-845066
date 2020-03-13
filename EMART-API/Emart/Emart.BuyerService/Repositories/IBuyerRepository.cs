using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;

namespace Emart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> Searchitems(string items);
        Buyer GetById(string Bid);
        void Buyitem(PurchaseHistory obj);
        void Editprofile(Buyer obj);
        Buyer Getprofile(string Bid);
        List<PurchaseHistory> Purchasehistory(string Bid);
       
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string Cid);
        List<Items> GetAllItems();
        List<Items> SearchByCategoryId(string Cid);
        void AddToCart(Cart cart);
        List<Cart> GetCartItems(string Bid);
        Cart GetCartId(string Cartid);
        void DeleteCartItem(string Cartid);

        public int GetCount(string Bid);

    }
}
