import pool from "../models/crmModel.js";

export const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM "ContactSchema".contacts`);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const addContact = async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone } = req.body;
    const result = await pool.query(
      `INSERT INTO "ContactSchema".contacts (firstName,lastName,email,company,phone) values ($1, $2, $3, $4, $5) RETURNING *`,
      [firstName, lastName, email, company, phone]
    );
    res
      .status(200)
      .send({ status: true, message: "New Contact created Successfuly." });
  } catch (error) {
    res.status(404).send({ status: false, message: error });
  }
};

export const getContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await pool.query(
      `SELECT * FROM "ContactSchema".contacts WHERE id= $1`,
      [contactId]
    );
    res.status(200).json({ status: true, message: result.rows });
  } catch (error) {
    res.status(404).send({ status: false, message: error });
  }
};
