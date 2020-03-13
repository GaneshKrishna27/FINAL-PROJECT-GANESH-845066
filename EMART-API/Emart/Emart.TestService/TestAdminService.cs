using Emart.AdminSerrvice.Models;
using Emart.AdminSerrvice.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.TestService
{
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test AddCategory()")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Cid = "C365",
                Categoryname = "HomeAppliances",
                Briefdetails = "BestQuality"
            });
            //var result = _repo.GetCategory("C365");
            //Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test AddSubCategory()")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                Scid = "SC27",
                SubCategoryname = "Furniture",
                Cid = "C365",
                Briefdetails = "Best",
                Gst = "12"
            });
            
        }
        [Test]
        [Description("Test DeleteCategory")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory("C365");
            var result = _repo.GetCatById("C365");
            Assert.Null(result);
        }
        [Test]
        [Description("Test DeleteSubCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory("SC27");
            var result = _repo.GetSCatById("SC27");
            Assert.Null(result);
        }
      
       
        [Test]
        [Description("Test GetCatById")]
        public void TestGetCatById()
        {
            var result = _repo.GetCatById("C365");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCatById")]
        public void TestGetSCatById()
        {
            var result = _repo.GetSCatById("SC27");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCategory()")]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
      
    }
}

