using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using KpiWebApiNet.Models;

namespace KpiWebApiNet.Controllers
{
    // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class FilialiController : ApiController
    {
        private TblLog db = new TblLog();

        // GET: api/ZDGG_tblFilialiFornitori
        public IQueryable<ZDGG_tblFilialiFornitori> GetZDGG_tblFilialiFornitori()
        {
            return db.ZDGG_tblFilialiFornitori.OrderBy(f => f.nome);
        }

        // GET: api/ZDGG_tblFilialiFornitori/5
        [ResponseType(typeof(ZDGG_tblFilialiFornitori))]
        public IHttpActionResult GetZDGG_tblFilialiFornitori(decimal id)
        {
            ZDGG_tblFilialiFornitori zDGG_tblFilialiFornitori = db.ZDGG_tblFilialiFornitori.Find(id);
            if (zDGG_tblFilialiFornitori == null)
            {
                return NotFound();
            }

            return Ok(zDGG_tblFilialiFornitori);
        }

        // PUT: api/ZDGG_tblFilialiFornitori/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutZDGG_tblFilialiFornitori(decimal id, ZDGG_tblFilialiFornitori zDGG_tblFilialiFornitori)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zDGG_tblFilialiFornitori.id)
            {
                return BadRequest();
            }

            db.Entry(zDGG_tblFilialiFornitori).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZDGG_tblFilialiFornitoriExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ZDGG_tblFilialiFornitori
        [ResponseType(typeof(ZDGG_tblFilialiFornitori))]
        public IHttpActionResult PostZDGG_tblFilialiFornitori(ZDGG_tblFilialiFornitori zDGG_tblFilialiFornitori)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ZDGG_tblFilialiFornitori.Add(zDGG_tblFilialiFornitori);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ZDGG_tblFilialiFornitoriExists(zDGG_tblFilialiFornitori.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = zDGG_tblFilialiFornitori.id }, zDGG_tblFilialiFornitori);
        }

        // DELETE: api/ZDGG_tblFilialiFornitori/5
        [ResponseType(typeof(ZDGG_tblFilialiFornitori))]
        public IHttpActionResult DeleteZDGG_tblFilialiFornitori(decimal id)
        {
            ZDGG_tblFilialiFornitori zDGG_tblFilialiFornitori = db.ZDGG_tblFilialiFornitori.Find(id);
            if (zDGG_tblFilialiFornitori == null)
            {
                return NotFound();
            }

            db.ZDGG_tblFilialiFornitori.Remove(zDGG_tblFilialiFornitori);
            db.SaveChanges();

            return Ok(zDGG_tblFilialiFornitori);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ZDGG_tblFilialiFornitoriExists(decimal id)
        {
            return db.ZDGG_tblFilialiFornitori.Count(e => e.id == id) > 0;
        }
    }
}