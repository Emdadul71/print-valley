"use client";
import { useGetAllTagQuery } from "@/appstore/blog/tag_api";
import { generateQueryString } from "@/helpers/utils";
import PageHeader from "@/modules/admin/@common/page_header";
import TagAction from "@/modules/admin/blog/@components/tagAction";
import EventAction from "@/modules/admin/event/program/@components/eventAction";
import { Input, Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface DataType {
  key: React.Key;
  name: string;
  id: any;
  requesterType: string;
  category: string;
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
    title: "Tag Name",
    dataIndex: "name",
  },
  {
    title: "Slug",
    dataIndex: "slug",
  },

  {
    title: "Action",
    dataIndex: "action",
    align: "end",
    render: (_, record) => <TagAction record={record} />,
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
const TagListPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);

  const programListQueryParams = {
    page,
    limit,
  };

  const queryString = generateQueryString(programListQueryParams);
  const { data, isLoading, isFetching } = useGetAllTagQuery(queryString);
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
          { title: "Blog", link: "/admin/blog" },
          { title: "All Tag", link: "" },
        ]}
        title={`${"All Tag"}`}
        btnTitle="Add Tag"
        btnLink="/admin/blog/tag/add"
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
        <div className="flex justify-between items-center mt-5 my-4  gap-[10px] ">
          <div className="flex gap-[10px]">
            <Select
              defaultValue="Bulk Action"
              style={{ width: 120 }}
              options={[
                { value: "lucy", label: "Lucy" },
                { value: "mizan", label: "Mizan" },
              ]}
            />

            <button className="border py-[3px] px-[15px] rounded-[4px]">
              Apply
            </button>

            <Select
              defaultValue="All Dates"
              style={{ width: 120 }}
              options={[
                { value: "lucy", label: "Lucy" },
                { value: "mizan", label: "Mizan" },
              ]}
            />

            <Select
              defaultValue="All Categories"
              style={{ width: 140 }}
              options={[
                { value: "lucy", label: "Lucy" },
                { value: "mizan", label: "Mizan" },
              ]}
            />

            <Select
              defaultValue="All Source"
              style={{ width: 140 }}
              options={[
                { value: "lucy", label: "Lucy" },
                { value: "mizan", label: "Mizan" },
              ]}
            />

            <button className="border py-[3px] px-[15px] rounded-[4px]">
              Filter
            </button>
          </div>

          <div className="w-3/12 relative">
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
        <div>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data?.results}
            loading={isFetching}
            pagination={paginationOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TagListPage;
