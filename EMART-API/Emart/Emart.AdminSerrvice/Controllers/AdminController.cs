using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminSerrvice.Models;
using Emart.AdminSerrvice.Repositories;
namespace Emart.AdminSerrvice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Addcategory")]

        public IActionResult AddCategory(Category obj)
        {
            try
            {
                _repo.AddCategory(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("Deletecategory/{Cid}")]
        public IActionResult DeleteCategory(string Cid)
        {
            try
            {
                _repo.DeleteCategory(Cid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("Addsubcategory")]
        public IActionResult AddSubCategory(SubCategory obj)
        {
            try
            {
                _repo.AddSubCategory(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("Deletesubcategory/{SCid}")]
        public IActionResult DeleteSubCategory(string SCid)
        {
            try
            {
                _repo.DeleteSubCategory(SCid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Viewcategory")]
        public IActionResult Viewcategory()
        {
            try
            {
                return Ok(_repo.ViewCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Viewsubcategory")]
        public IActionResult Viewsubcategory()
        {
            try
            {
                return Ok(_repo.ViewSubCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getcategory")]
        public IActionResult Getcategory()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCatById/{Cid}")]
        public IActionResult GetCatById(string Cid)
        {
            try
            {
                return Ok(_repo.GetCatById(Cid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSCatById/{Scid}")]
        public IActionResult GetSCatById(string Scid)
        {
            try
            {
                return Ok(_repo.GetSCatById(Scid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}