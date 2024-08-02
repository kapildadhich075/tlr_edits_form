import React from "react";
import TopNav from "../Topnav";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const ExtendCredit = () => {
  return (
    <>
      <TopNav />
      <div className="p-6">
        <div className="mb-4 text-2xl font-bold">Extend Credit</div>
        <p className="mb-4 text-slate-500 font-semibold">
          Manage your credit instances below
        </p>
        <TableContainer component={Paper} className="rounded-md shadow-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="border-bt-2 text-zinc-500 border-gray-200 font-semibold ">
                  Date Purchased
                </TableCell>
                <TableCell className=" text-zinc-500 border-gray-200 font-semibold">
                  Credit Purchased
                </TableCell>
                <TableCell className=" text-zinc-500 border-gray-200 font-semibold">
                  Credit Remaning
                </TableCell>
                <TableCell className=" text-zinc-500 border-gray-200 font-semibold w-1/4">
                  Expiration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  &nbsp;
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ExtendCredit;
