using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController (ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetById/{Sid}")]
        public IActionResult GetById(string Sid)
        {
            try
            {
                return Ok(_repo.GetById(Sid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("Editprofile")]
        public IActionResult EditProfile(Seller obj)
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
        [Route("Getprofile/{Sid}")]
        public IActionResult GetProfile(string Sid)
        {
            try
            {
                return Ok(_repo.Getprofile(Sid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        

    }
}