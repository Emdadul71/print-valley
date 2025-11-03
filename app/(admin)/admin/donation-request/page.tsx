"use client";
import { useGetAllDonationRequestQuery } from "@/appstore/donationRequest/donation";
import DonationRequestAction from "@/modules/admin/@common/donationRequestAction";
import PageHeader from "@/modules/admin/@common/page_header";
import { Input, Select, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface DataType {
  key: React.Key;
  name: string;
  requesterType: string;
  typeOfDonation: string;
  nameOfOrganization: string;
  applicationStatus: string;
  approvalNote: string;
  mobileNumber: any;
  publishDate: string;
  publishTime: string;
  status: any;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Beneficiary Type",
    dataIndex: "requesterType",
    width: "20%",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Beneficiary Name",
    dataIndex: "name",
    width: "20%",

    render: (_, render) => (
      <div>{`${
        render?.requesterType == "Individual"
          ? render?.name
          : render?.nameOfOrganization
      }`}</div>
    ),
  },
  {
    title: "Type Of Donation",
    dataIndex: "donationType",
    width: "20%",

    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    width: "20%",
  },
  {
    title: "Date of Request",
    dataIndex: "publishDate",
    width: "20%",
  },
  {
    title: "Request Status",
    dataIndex: "applicationStatus",
    width: "20%",

    render: (_, record) => (
      <div>
        <p
          className={`inline-flex px-2 py-[2px] font-medium rounded-lg mb-0 ${
            record?.applicationStatus == "Pending"
              ? "bg-[#fff1d6] text-[#ffa800]"
              : record?.applicationStatus == "Approved"
              ? "bg-[#e7f0e3] text-[#28c76f]"
              : "bg-red-100 text-red-500"
          }`}
        >
          {record?.applicationStatus}
        </p>
      </div>
    ),
  },

  {
    title: "Note",
    dataIndex: "approvalNote",
    width: "20%",
    ellipsis: true,
    render: (_, record) => (
      <div>
        <p className={`inline-flex px-2 py-[2px] font-medium rounded-lg mb-0`}>
          <Tooltip
            placement="topLeft"
            title={record?.approvalNote}
            // arrow={mergedArrow}
          >
            <span className="line-clamp-1">{record?.approvalNote}</span>
          </Tooltip>
        </p>
      </div>
    ),
  },

  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    width: "20%",

    render: (_, record) => <DonationRequestAction record={record} />,
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  // getCheckboxProps: (record: DataType) => ({
  //   disabled: record.name === "Disabled User", // Column configuration not to be checked
  //   name: record.name,
  // }),
};
const DonationRequestPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const { data, isLoading, isFetching } = useGetAllDonationRequestQuery({
    limit,
    page,
  });
  console.log("data", data);

  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  //  Pagination
  const paginationOptions = {
    showSizeChanger: true,
    showQuickJumper: true,
    defaultPageSize: limit,
    current: page,
    onChange: (page: any) => {
      setPage(page);
    },
    onShowSizeChange: (_: any, showItem: any) => {
      setLimit(showItem);
    },
    pageSizeOptions: [10, 20, 30, 50],
    // total: data?.totalItems,
    showTotal: (total: number, range: any) =>
      `${range[0]} to ${range[1]} of ${total}`,
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: "Donation Request", link: "" },
        ]}
        title={`${"All Donation Request"}`}
      />

      {/* 
      <div className="flex items-center gap-2 ">
        <Link href="/admin/dashboard" className="mb-0 font-medium">
          Dashboard
        </Link>
        <FiChevronRight />
        <p className="mb-0 font-medium text-secondary">Donation Request</p>
      </div> 
       <div className="flex justify-between items-center mt-3 border-b pb-4">
        <h4 className="text-primary">All Donation Request</h4>
      </div> */}

      <div>
        <div className="flex flex-wrap justify-between items-center mt-5 my-4  gap-[10px] ">
          <div className="flex flex-wrap gap-[10px]">
            <Select
              defaultValue="All Dates"
              style={{ width: 120 }}
              options={[
                { value: "lucy", label: "Lucy" },
                { value: "mizan", label: "Mizan" },
              ]}
            />

            <button className="border py-[3px] px-[15px] rounded-[4px]">
              Filter
            </button>
          </div>

          <div className="w-full lg:w-3/12 relative">
            <Input
              type="text"
              // prefix={<BiSearch size={18} />}
              name=""
              id=""
              placeholder="Search Donation Request"
              className="border pl-8 pr-5 py-1 rounded-[4px] w-full"
            />
            <BiSearch
              size={18}
              className="absolute top-[50%]  translate-y-[-50%] left-2"
            />
          </div>
        </div>
        <div className="overflow-auto ">
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data?.results}
            loading={isFetching}
            pagination={paginationOptions}
            className="whitespace-nowrap min-w-[1100px] overflow-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DonationRequestPage;
