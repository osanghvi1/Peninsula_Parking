//Author: Om Sanghvi



const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const app = express();
const PORT = 3306;


app.use(cors());
app.use(express.json());
//app.use(express.static("public"));
//app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});





app.post("/ContactPage", async (req, res) => {
  try {
    // Validate if body contains data
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "POST:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }

    // Check if the table exists
    const [tableExists] = await db.query(
      "SHOW TABLES LIKE 'CustomersInfo'"
    );
    if (tableExists.length === 0) {
      const msg = "POST:Table does not exist";
      console.log(msg);
      return res.status(404).send({ error: msg });
    }

    // Proceed to add new item
    const { firstName, lastName, email, message } = req.body;
    const insertSql =
      "INSERT INTO CustomersInfo (firstName, lastName, email, message) VALUES (?, ?, ?, ?)";
    const insertResult = await db.query(insertSql, [
      firstName,
      lastName,
      email,
      message,
    ]);

    // success
    const msg = "POST:Success in Posting MySQL" + insertResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "POST: An ERROR occurred in Post" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});


app.post("/Carrers", async (req, res) => {
  try {
    // Validate if body contains data
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "POST:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }

    // Check if the table exists
    const [tableExists] = await db.query(
      "SHOW TABLES LIKE 'Carrers'"
    );
    if (tableExists.length === 0) {
      const msg = "POST:Table does not exist";
      console.log(msg);
      return res.status(404).send({ error: msg });
    }

    // Proceed to add new item
    const {firstName, lastName, email, confirmedEmail, phone } = req.body;
    const insertSql =
      "INSERT INTO CustomersInfo (first_name, last_name, email, confirmedEmail, phone_number) VALUES (?, ?, ?, ?, ?)";
    const insertResult = await db.query(insertSql, [
      firstName,
      lastName,
      email,
      confirmedEmail,
      phone
    ]);

    // success
    const msg = "POST:Success in Posting MySQL" + insertResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "POST: An ERROR occurred in Post" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});



app.post("/Quote", async (req, res) => {
  try {
    // Validate if body contains data
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "POST:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }

    // Check if the table exists
    const [tableExists] = await db.query(
      "SHOW TABLES LIKE 'CustomerOrder'"
    );
    if (tableExists.length === 0) {
      const msg = "POST:Table does not exist";
      console.log(msg);
      return res.status(404).send({ error: msg });
    }


    // Proceed to add new item
    const {
      firstName,
      lastName,
      Company,
      AddressLine1,
      AddressLine2,
      City,
      State,
      Zip,
      Email,
      Phone,
      Contact,
      Date,
      Arrival,
      Depature,
      Service,
      Guest,
      NumberofCars,
      Comments
  } = req.body;
  
  const insertSql = `
      INSERT INTO CustomerOrder (
          first_name,
          last_name,
          company,
          address_line1,
          address_line2,
          city,
          state,
          zip_code,
          email,
          phone_number,
          preferred_contact_method,
          event_date,
          expected_guest_arrival,
          expected_guest_departure,
          service_requested,
          number_of_guests,
          number_of_cars,
          comments
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
  
  const insertResult = await db.query(insertSql, [
    firstName,
    lastName,
    Company,
    AddressLine1,
    AddressLine2,
    City,
    State,
    Zip,
    Email,
    Phone,
    Contact,
    Date,
    Arrival,
    Depature,
    Service,
    Guest,
    NumberofCars,
    Comments
  ]);

    // success
    const msg = "POST:Success in Posting MySQL" + insertResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "POST: An ERROR occurred in Post" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});












