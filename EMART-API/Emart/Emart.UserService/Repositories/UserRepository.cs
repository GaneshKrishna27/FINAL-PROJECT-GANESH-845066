using Emart.UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.UserService.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly EmartDBContext _context;
        public UserRepository(EmartDBContext context)
        {
            _context = context;
        }
       

        public void BuyerSignup(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

       

        public void SellerSignup(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }

         public Buyer BuyerSignin(string Username, string Password)
        {
            Buyer b = _context.Buyer.SingleOrDefault(e => e.Username == Username && e.Password == Password);
            if (b != null)
            {
                return b;
            }
            else
                return null;
        }

        public Seller SellerSignin(string Username, string Password)
        {
            Seller s = _context.Seller.SingleOrDefault(e => e.Username == Username && e.Password == Password);
            if (s!=null)
            {
                return s;
            }
            else
                return null;
        }
    }
}
