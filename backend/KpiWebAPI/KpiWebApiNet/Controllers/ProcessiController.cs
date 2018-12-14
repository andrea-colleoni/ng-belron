using KpiWebApiNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KpiWebApiNet.Controllers
{
    public class ProcessiController : ApiController
    {
        private TblLog db = new TblLog();
        // GET: api/Processi
        public IHttpActionResult Get()
        {
            return Ok(
                db.ZDGG_tblLog
                .Select(l => new { nome = l.processo })
                .Distinct()
                .OrderBy(l => l.nome)
                .ToList()
                );
        }

        // GET: api/Processi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Processi
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Processi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Processi/5
        public void Delete(int id)
        {
        }
    }
}
