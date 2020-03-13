using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetById/{Bid}")]
        public IActionResult GetById(string Bid)
        {
            try
            {
                return Ok(_repo.GetById(Bid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("Buyitem")]
        public IActionResult Buyitem(PurchaseHistory obj)
        {
            try
            {
                _repo.Buyitem(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("Editprofile")]
        public IActionResult Editprofile(Buyer obj)
        {
            try
            {
                _repo.Editprofile(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }


        }
        [HttpGet]
        [Route("Getprofile/{Bid}")]
        public IActionResult Getprofile(string Bid)
        {
            try
            {
                return Ok(_repo.Getprofile(Bid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet]
        [Route("Search/{Itemname}")]
        public IActionResult searchitem(string itemname)
        {
            try
            {
                return Ok(_repo.Searchitems(itemname));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Purchasehistory/{Bid}")]
        public IActionResult Purchasehistory(string Bid)
        {
            try
            {
                return Ok(_repo.Purchasehistory(Bid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getcategory")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getsubcategory/{SCid}")]
        public IActionResult GetSubCategories(string SCid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(SCid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("Getallitems")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Searchbycategoryid/{Cid}")]
        public IActionResult SearchByCategoryId(string Cid)
        {
            try
            {
                return Ok(_repo.SearchByCategoryId(Cid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("Addtocart")]
        public IActionResult AddToCart(Cart cart)
        {
            try
            {
                _repo.AddToCart(cart);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getcartitems/{Bid}")]
        public IActionResult GetCartItems(string Bid)
        {
            try
            {
                return Ok(_repo.GetCartItems(Bid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCartId/{Bid}")]
        public IActionResult GetCartById(string Cartid)
        {
            try
            {
                return Ok(_repo.GetCartId(Cartid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("Removeitem/{Cartid}")]
        public IActionResult DeleteCartItem(string Cartid)
        {
            try
            {
                _repo.DeleteCartItem(Cartid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getcount/{Bid}")]
        public IActionResult GetCart(string Bid)
        {
            try
            {
                
                return Ok(_repo.GetCount(Bid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }


    }
}