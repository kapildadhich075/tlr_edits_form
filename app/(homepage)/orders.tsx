import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
} from "@nextui-org/react";
import { users } from "./data";

export default function Order() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.order.toLowerCase().toString().includes(searchTerm) ||
        user.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.editorartist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.nextdraftin.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredUsers.slice(start, end);
  }, [page, filteredUsers]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedOption("");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">
            Order Counter: {filteredUsers.length}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Input
            isClearable
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="select-menu"
          >
            <option value="createdDate">Created Date</option>
            <option value="dueDate">Due Date</option>
            <option value="videoTitle">Video Title</option>
            <option value="completionDate">Completion Date</option>
            <option value="orderRating">Order Rating </option>
            <option value="orderCredits">Order Credits </option>
          </select>
          <button onClick={handleClearFilters}>Clear</button>
        </div>
      </div>
      <Table
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="order">Order</TableColumn>
          <TableColumn key="status">Status</TableColumn>
          <TableColumn key="editorartist">Editor/Artist</TableColumn>
          <TableColumn key="nextdraftin">Next Draft In</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.order}>
              <TableCell>{item.order}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.editorartist}</TableCell>
              <TableCell>{item.nextdraftin}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
