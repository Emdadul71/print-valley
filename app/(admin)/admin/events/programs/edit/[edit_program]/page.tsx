import ProgramsAddEdit from "@/modules/admin/event/program/programsAddEdit";
import React from "react";

const ProgramEditPage = ({ params }: any) => {
  return <ProgramsAddEdit id={params?.edit_program} />;
};

export default ProgramEditPage;
