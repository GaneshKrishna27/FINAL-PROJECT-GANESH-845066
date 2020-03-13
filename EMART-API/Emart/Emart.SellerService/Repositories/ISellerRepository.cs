using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public interface ISellerRepository
    {
        Seller GetById(string Sid);

        void Editprofile(Seller obj);
        Seller Getprofile(string Sid);
        

    }
}
