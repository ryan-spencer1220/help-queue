import React from "react";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function EditTicketForm(props) {
  const firestore = useFirestore();
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket();
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
    };
    return firestore.update(
      { collection: "tickets", doc: ticket.id },
      propertiesToUpdate
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission} /* new code */
        buttonText="Update Ticket"
      />
    </React.Fragment>
  );
}

export default EditTicketForm;
