"use client";
import { Checkbox, Modal, Popconfirm, Select, Tooltip, message } from "antd";
import { Form, Formik } from "formik";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
import { FiEdit, FiExternalLink, FiEye, FiTrash2 } from "react-icons/fi";
import * as Yup from "yup";
import Link from "next/link";
import { useDeleteDonationRequestMutation } from "@/appstore/donationRequest/donation";

const DonationRequestAction = ({ record, isTrash }: any) => {
  const [deleteItem] = useDeleteDonationRequestMutation();

  const deleteConfirm = async (id: any) => {
    try {
      const res: any = await deleteItem({
        id: id,
      });
      if (!res?.error) {
        message.success("Item permanently deleted successfully!");
      } else {
        if (res?.error?.status >= 500) {
          message.error("Somthing went wrong.");
        } else {
          message.error(
            `${
              res?.error?.data?.message
                ? res?.error?.data?.message
                : "Somthing went wrong"
            }`
          );
        }
      }
    } catch (err) {}
  };
  return (
    <div className="">
      <div className="flex items-center justify-end gap-3">
        <div className="flex items-center gap-3">
          <Link href={`${`/admin/donation-request/edit/${record?.id}`}`}>
            <FiEye className="text-base" />
          </Link>
          <Tooltip placement="bottom" title={"Permanent Delete"}>
            <Popconfirm
              placement="topRight"
              title={
                <div className="font-semibold">
                  Are you sure you want to delete this item Permanently? <br />
                  <div className="font-normal">
                    Deleted item can&apos;t be recovered!
                  </div>
                </div>
              }
              onConfirm={() => deleteConfirm(record?.id)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button" className="hover:text-secondary">
                <FiTrash2 className="text-base" />
              </button>
            </Popconfirm>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default DonationRequestAction;
