using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminSerrvice.Models;

namespace Emart.AdminSerrvice.Repositories
{
    public interface IAdminRepository
    {
      
        public void AddCategory(Category obj);
        public void DeleteCategory(string Cid);
        public void AddSubCategory(SubCategory obj);
        public void DeleteSubCategory(string SCid);
        //Category ViewCategory(string Cid);
        List<Category> ViewCategory();
        //SubCategory ViewSubCategory(string SCid);
        List<SubCategory> ViewSubCategory();
        List<Category> GetCategory();
        Category GetCatById(string Cid);
        SubCategory GetSCatById(string Scid);


    }
}
