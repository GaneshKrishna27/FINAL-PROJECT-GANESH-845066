using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.TestService
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new SellerService.Models.EmartDBContext());
        }
        [Test]
        [Description("Test GetProfile")]
        public void TestGetProfile()
        {
            var result = _repo.Getprofile("1");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test EditProfile")]
        public void TestEditProfile()
        {
            Seller seller = _repo.Getprofile("2");
            seller.Username = "krishna";
            _repo.Editprofile(seller);
            Seller seller1 = _repo.Getprofile("2");

            Assert.AreSame(seller, seller1);
        }

    }
}
