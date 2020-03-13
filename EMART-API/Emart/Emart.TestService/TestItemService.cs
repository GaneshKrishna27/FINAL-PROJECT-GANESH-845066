using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.TestService
{
    [TestFixture]
    class TestItemService
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new SellerService.Models.EmartDBContext());
        }
        [Test]
        [Description("Test AddItems")]
        public void TestAddItems()
        {
            _repo.AddItem(new Items()
            {
                Iid = "I098",
                Itemname = "note7",
                Price = 12999,
                Stock = 5,
                Sid = "S00",
                Cid = "C260",
                Scid = "SC311",
                Description = "ram 8gb",
                Remarks = "6months warranty",
                Image = "mi7.jpg"
            });
            var result = _repo.GetItem("I098");
            Assert.NotNull(result);
        }
        [Test]
        public void TestViewItems()
        {
            var result = _repo.Viewitems("S969");
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteItem()
        {
            _repo.Deleteitem("7");
            var result = _repo.GetItem("7");
            Assert.Null(result);
        }
        [Test]
        public void TestUpdateItem()
        {
            Items items = _repo.GetItem("7");
            items.Price = 2399;
            _repo.Updateitem(items);
            Items items1 = _repo.GetItem("7");
            Assert.AreSame(items, items1);

        }
        [Test]
        public void TestGetAllCategories()
        {
            var result = _repo.GetCategory();
            Assert.NotNull(result);
        }
        [Test]
        public void TestSubCategory()
        {
            var result = _repo.GetSubCagegory("1");
            Assert.NotNull(result);
        }
    }

}

