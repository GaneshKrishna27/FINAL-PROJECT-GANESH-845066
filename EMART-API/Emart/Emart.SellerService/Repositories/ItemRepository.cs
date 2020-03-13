using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class ItemRepository:IItemRepository
    {
        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Items GetItem(string Iid)
        {
            return _context.Items.Find(Iid);
        }
        public void AddItem(Items items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }

        public List<Items> Viewitems(string Sid)
        {
            return _context.Items.Where(s=>s.Sid==Sid).ToList();
        }

        public void Deleteitem(string Iid)
        {
            Items items = _context.Items.Find(Iid);
            _context.Remove(items);
            _context.SaveChanges();
        }

        public void Updateitem(Items items)
        {
            _context.Items.Update(items);
            _context.SaveChanges(); 
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetSubCagegory(string Cid)
        {
            return _context.SubCategory.Where(c => c.Cid == Cid).ToList();
        }




    }
}
