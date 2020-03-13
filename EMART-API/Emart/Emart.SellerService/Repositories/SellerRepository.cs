using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Seller GetById(string Sid)
        {
            return _context.Seller.Find(Sid);
        }

        public void Editprofile(Seller obj)
        {
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

        public Seller Getprofile(string Sid)
        {
            return _context.Seller.Find(Sid);
        }

       
    }
}
