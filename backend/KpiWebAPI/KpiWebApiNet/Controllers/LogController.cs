using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using KpiWebApiNet.Models;

namespace KpiWebApiNet.Controllers
{
    public class LogController : ApiController
    {
        private TblLog db = new TblLog();
        const int MAX_RESULTS = 1000;

        // GET: api/ZDGG_tblLog
        public IQueryable<ZDGG_tblLog> GetZDGG_tblLog()
        {
            return db.ZDGG_tblLog.OrderByDescending(l => l.data).Take(MAX_RESULTS);
        }

        // GET: api/ZDGG_tblLog/5
        [ResponseType(typeof(ZDGG_tblLog))]
        public IHttpActionResult GetZDGG_tblLog(int id)
        {
            ZDGG_tblLog zDGG_tblLog = db.ZDGG_tblLog.Find(id);
            if (zDGG_tblLog == null)
            {
                return NotFound();
            }

            return Ok(zDGG_tblLog);
        }

        // PUT: api/ZDGG_tblLog/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutZDGG_tblLog(int id, ZDGG_tblLog zDGG_tblLog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zDGG_tblLog.Id)
            {
                return BadRequest();
            }

            db.Entry(zDGG_tblLog).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZDGG_tblLogExists(id))
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

        // POST: api/ZDGG_tblLog
        [ResponseType(typeof(ZDGG_tblLog))]
        public IHttpActionResult PostZDGG_tblLog(ZDGG_tblLog zDGG_tblLog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ZDGG_tblLog.Add(zDGG_tblLog);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = zDGG_tblLog.Id }, zDGG_tblLog);
        }

        // DELETE: api/ZDGG_tblLog/5
        [ResponseType(typeof(ZDGG_tblLog))]
        public IHttpActionResult DeleteZDGG_tblLog(int id)
        {
            ZDGG_tblLog zDGG_tblLog = db.ZDGG_tblLog.Find(id);
            if (zDGG_tblLog == null)
            {
                return NotFound();
            }

            db.ZDGG_tblLog.Remove(zDGG_tblLog);
            db.SaveChanges();

            return Ok(zDGG_tblLog);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ZDGG_tblLogExists(int id)
        {
            return db.ZDGG_tblLog.Count(e => e.Id == id) > 0;
        }
    }
}