using Emart.UserService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;


namespace Emart.TestService
{
    [TestFixture]
    public class TestUserService
    {
        UserRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new UserRepository(new UserService.Models.EmartDBContext());

        }
        [Test]
        [Description("Test BuyerSignup")]
        public void TestBuyerSignup()
        {
            _repo.BuyerSignup(new UserService.Models.Buyer
            {
                Bid="4",
                Username="jyo",
                Password="jyo123",
                Email="jyo@gmail.com",
                Mobile="9874563210",
                Datetime=DateTime.Now
            });
            var result = _repo.BuyerSignin("Jyo", "Jyo123");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test SellerSignup")]
        public void TestSellerSignup()
        {
            _repo.SellerSignup(new UserService.Models.Seller
            {
                Sid = "4",
                Username = "jyo",
                Password = "jyo123",
                Companyname="Cts",
                Gstin="jyo123654",
                Briefaboutcompany="Software company",
                Address="tanaku",
                Website="Jyo.com",
                Email = "jyo@gmail.com",
                Mobile = "9874563210",
                
            });
            var result = _repo.SellerSignin("Jyo", "Jyo123");
            Assert.NotNull(result);
        }
    }
}
