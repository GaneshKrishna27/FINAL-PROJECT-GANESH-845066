using Emart.AdminSerrvice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminSerrvice.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteCategory(string Cid)
        {
            Category c = _context.Category.Find(Cid);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(string SCid)
        {
            SubCategory sub = _context.SubCategory.Find(SCid);
            _context.Remove(sub);
            _context.SaveChanges();
        }
        

        public List<Category> ViewCategory()
        {
            return _context.Category.ToList();
        }

        

        public List<SubCategory> ViewSubCategory()
        {
            return _context.SubCategory.ToList();
        }
        public List<Category>GetCategory()
        {
            return _context.Category.ToList();

        }

        public Category GetCatById(string Cid)
        {
            return _context.Category.Find(Cid);
        }
        public SubCategory GetSCatById(string Scid)
        {
            return _context.SubCategory.Find(Scid);
        }
    }
}
