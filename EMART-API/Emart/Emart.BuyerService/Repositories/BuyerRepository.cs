using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Buyer GetById(string Bid)
        {
            return _context.Buyer.Find(Bid);
        }

        public void Editprofile(Buyer obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
        }

        public Buyer Getprofile(string Bid)
        {
            return _context.Buyer.Find(Bid);
        }

        public List<PurchaseHistory> Purchasehistory(string bid)
        {
            return _context.PurchaseHistory.Where(e => e.Bid == bid).ToList();
        }

        public List<Items> Searchitems(string items)
        {
            return _context.Items.Where(e => e.Itemname == items).ToList();
        }
        public List<Category>GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories(string Cid)
        {
            List<SubCategory> subcategories = _context.SubCategory.Where(e => e.Cid == Cid).ToList();
            return subcategories;
        }
        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }

        public List<Items> SearchByCategoryId(string Cid)
        {
            return _context.Items.Where(e => e.Cid == Cid).ToList();
        }
        public void Buyitem(PurchaseHistory obj)
        {
            _context.PurchaseHistory.Add(obj);
            _context.SaveChanges();
        }

        public void AddToCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }

        public List<Cart> GetCartItems(string Bid)
        {
            return _context.Cart.Where(e=>e.Bid==Bid).ToList();
        }

        public void DeleteCartItem(string Cartid)
        {
            Cart cart = _context.Cart.Find(Cartid);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }
        public int GetCount(string Bid)
        {
            return _context.Cart.Where(res=>res.Bid==Bid).ToList().Count;
        }

        public Cart GetCartId(string Cartid)
        {
            return _context.Cart.Find(Cartid);
        }
    }
}
