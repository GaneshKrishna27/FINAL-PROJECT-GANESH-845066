using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Getitem/{Iid}")]
        public IActionResult GetItem(string Iid)
        {
            try
            {
                return Ok(_repo.GetItem(Iid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("Additem")]
        public IActionResult AddItem(Items items)
        {
            try
            {
                _repo.AddItem(items);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Viewitems/{Sid}")]
        public IActionResult ViewItems(String Sid)
        {
            try
            {
                return Ok(_repo.Viewitems(Sid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("Updateitem")]
        public IActionResult UpdateItem(Items items)
        {
            try
            {
                _repo.Updateitem(items);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("Deleteitem/{Iid}")]
        public IActionResult DeleteItem(string Iid)
        {
            try
            {
                _repo.Deleteitem(Iid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getsubcategory/{Cid}")]
        public IActionResult Getsubcategory(string Cid)
        {
            try
            {
                return Ok(_repo.GetSubCagegory(Cid));
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
    }
}