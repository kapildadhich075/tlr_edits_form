import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import TopNav from "../Topnav";

const CreditHistory = () => {
  return (
    <>
      <TopNav />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="mb-4 text-2xl font-bold">Credit History</div>
            <p className="mb-4 text-slate-500 font-semibold">
              View details of your credit transactions below{" "}
            </p>
          </div>

          <input
            type="date"
            placeholder="Select Date Range"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <TableContainer component={Paper} className="rounded-md shadow-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Date
                </TableCell>
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Credits
                </TableCell>
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold w-1/2">
                  Notes
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

export default CreditHistory;
