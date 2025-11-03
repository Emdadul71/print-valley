import EventAddEdit from "@/modules/admin/event/eventAddEdit";
import React from "react";

const EventEdit = ({ params }: any) => {
  return <EventAddEdit id={params?.edit_event} />;
};

export default EventEdit;
