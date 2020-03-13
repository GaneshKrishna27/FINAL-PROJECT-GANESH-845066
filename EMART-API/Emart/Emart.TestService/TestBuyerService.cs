using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.TestService
{
    [TestFixture]
    public class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test GetById")]
        public void TestGetById()
        {
            var result = _repo.GetById("4");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test View/Edit Profile")]
        public void TestUpdateProfile()
        {
            Buyer buyer = _repo.Getprofile("4");
            buyer.Mobile = "9666666666";
            _repo.Editprofile(buyer);
            Buyer buyer1 = _repo.Getprofile("4");
            Assert.AreSame(buyer, buyer1);
        }
        [Test]
        [Description("Test PurchaseHistory/Add")]
        public void TestPurchaseHistory()
        {
            var result = _repo.Purchasehistory("4");
            Assert.IsNotNull(result);
            _repo.Buyitem(new PurchaseHistory()
            {
                Phid = "T125",
                Sid = "1",
                Bid = "4",
                Iid = "2",
                Transactiontype="debit",
                Noofitems=5,
                Datetime=DateTime.Now,
                Remarks="gud",
                TransactionStatus="failed"
            });

        }
        [Test]
        [Description("Test SearchItems")]
        public void TestSearchItems()
        {
            var result = _repo.Searchitems("g");
            Assert.IsNotNull(result);
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Test GetCategory/GetSubCategory")]
        public void TestGetCategorySubCategory()
        {
            var result=_repo.GetCategories();
            Assert.IsNotNull(result);
            var result1 = _repo.GetSubCategories("1");
            Assert.IsNotNull(result1);
        }
        [Test]
        [Description("Test GetAllItems()")]
        public void GetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SearchByCategoryId")]
        public void SearchByCategoryId()
        {
            var result = _repo.SearchByCategoryId("1");
            Assert.IsNotNull(result);
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Test GetCartItems")]
        public void GetCartItems()
        {
            var result = _repo.GetCartItems();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteCartItem")]
        public void DeleteCartItem()
        {
            _repo.DeleteCartItem("cartid786");
            var result = _repo.GetCartId("cartid786");
            Assert.Null(result);
        }
        [Test]
        [Description("Test GetCount")]
        public void GetCount()
        {
            var result = _repo.GetCount("1");
            Assert.NotNull(result);
        }


    }
}
