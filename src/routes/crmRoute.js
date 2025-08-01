import {
  getAllContacts,
  addContact,
  getContact,
} from "../controller/crmController.js";

const routes = (app) => {
  app
    .route("/contact")
    .get(getAllContacts)

    .post(addContact);

  app
    .route("/contact/:contactId")
    .get(getContact)

    .delete((req, res) => {
      res.send("Delete Request Successful");
    });
};

export default routes;
