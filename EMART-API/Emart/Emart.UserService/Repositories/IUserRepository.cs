using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.UserService.Models;

namespace Emart.UserService.Repositories
{
    public interface IUserRepository
    {
        Buyer BuyerSignin(string Username, string Password);
        Seller SellerSignin(string Username, string Password);
        void BuyerSignup(Buyer buyer);
        void SellerSignup(Seller seller);

        
    }
}
