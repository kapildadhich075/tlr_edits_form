'use client'
import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  SkipPrevious as SkipPreviousIcon,
  SkipNext as SkipNextIcon,
} from "@mui/icons-material";
import { users } from "../constants/DummyData";

export default function Order() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [detailsType, setDetailsType] = useState("");
  const rowsPerPage = 8;
  const pagesPerGroup = 5;

  const filteredUsers = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return users.filter((user) => {
      const orderTypeMatch = user.orderType.toLowerCase().includes(lowerSearchTerm);
      const videoFootageDetailsMatch = user.videoFootageDetails
        ? user.videoFootageDetails.length.toString().includes(lowerSearchTerm)
        : false;
      const selectedAddonsMatch = user.selectedAddons
        ? user.selectedAddons.join(", ").toLowerCase().includes(lowerSearchTerm)
        : false;

      return orderTypeMatch || videoFootageDetailsMatch || selectedAddonsMatch;
    });
  }, [searchTerm]);

  const pages = useMemo(() => Math.ceil(filteredUsers.length / rowsPerPage), [filteredUsers.length, rowsPerPage]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredUsers.slice(start, end);
  }, [page, filteredUsers, rowsPerPage]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedOption("");
    setDetailsType("");
  };

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  const handlePrevGroup = () => {
    if (page > pagesPerGroup) {
      setPage(page - pagesPerGroup);
    }
  };

  const handleNextGroup = () => {
    if (page + pagesPerGroup <= pages) {
      setPage(page + pagesPerGroup);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const currentGroup = Math.ceil(page / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, pages);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">
            Orders
            <div className="text-sm font-normal text-gray-500">
              {filteredUsers.length} current orders
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            placeholder="Type here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border-2 hover:border-red-300 p-2 w-40"
          />
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="rounded-md border-2 hover:border-red-300 p-2 w-40"
          >
            <option value="">Created Date</option>
            <option value="orderType">Due Date</option>
            <option value="selectedAddons">Completion Date</option>
            <option value="selectedAddons">Order Rating</option>
            <option value="selectedAddons">Order Credits</option>
          </select>
          <select
            value={detailsType}
            onChange={(e) => setDetailsType(e.target.value)}
            className="rounded-md border-2 hover:border-red-300 p-2 w-40"
          >
            <option value="">Select Details</option>
            <option value="orderLogisticsDetails">Order Logistics Details</option>
            <option value="styleDetails">Style Details</option>
            <option value="orderDetails">Order Details</option>
            <option value="addonDetails">Addon Details</option>
          </select>
          <button
            onClick={handleClearFilters}
            className="bg-transparent border border-red-500 font-semibold text-red-500 py-2 px-4 rounded-lg w-40 hover:bg-slate-100"
          >
            Clear
          </button>
        </div>
      </div>
      <TableContainer component={Paper} className="rounded-md shadow-md">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                Order Type
              </TableCell>
              <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                Selected Addons
              </TableCell>
              <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                Video Footage Details
              </TableCell>
              {detailsType === "orderLogisticsDetails" && (
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Order Logistics Details
                </TableCell>
              )}
              {detailsType === "styleDetails" && (
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Style Details
                </TableCell>
              )}
              {detailsType === "orderDetails" && (
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Order Details
                </TableCell>
              )}
              {detailsType === "addonDetails" && (
                <TableCell className="border-b-2 text-zinc-500 border-gray-200 font-semibold">
                  Addon Details
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.orderType}</TableCell>
                <TableCell>{item.selectedAddons.join(", ")}</TableCell>
                <TableCell>
                  {item.videoFootageDetails.length} / {item.videoFootageDetails.size}
                </TableCell>
                {detailsType === "orderLogisticsDetails" && (
                  <TableCell>
                    <div>
                      <strong>Video Title:</strong> {item.orderLogisticsDetails?.videoTitle}
                    </div>
                    <div>
                      <strong>Video Category:</strong> {item.orderLogisticsDetails?.videoCategory}
                    </div>
                    <div>
                      <strong>Video Description:</strong> {item.orderLogisticsDetails?.videoDescription}
                    </div>
                    <div>
                      <strong>Publish Date:</strong>{" "}
                      {new Date(item.orderLogisticsDetails?.publishDate).toLocaleDateString()}
                    </div>
                    <div>
                      <strong>Final Length:</strong> {item.orderLogisticsDetails?.finalLength} sec
                    </div>
                  </TableCell>
                )}
                {detailsType === "styleDetails" && (
                  <TableCell>
                    <div>
                      <strong>Pace:</strong> {item.styleDetails?.pace}
                    </div>
                    <div>
                      <strong>Tone:</strong> {item.styleDetails?.tone.join(", ")}
                    </div>
                  </TableCell>
                )}
                {detailsType === "orderDetails" && (
                  <TableCell>
                    <div>
                      <strong>Script Link:</strong>{" "}
                      <a
                        href={item.orderDetails?.scriptLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.orderDetails?.scriptLink}
                      </a>
                    </div>
                    <div>
                      <strong>Slug:</strong> {item.orderDetails?.slug}
                    </div>
                    <div>
                      <strong>Rich Text Data:</strong>{" "}
                      <div dangerouslySetInnerHTML={{ __html: item.orderDetails?.richTextData }} />
                    </div>
                  </TableCell>
                )}
                {detailsType === "addonDetails" && (
                  <TableCell>
                    <div>
                      <strong>Tone:</strong> {item.addonDetails?.tone.join(", ")}
                    </div>
                    <div>
                      <strong>Include Logo:</strong> {item.addonDetails?.includeLogo ? "Yes" : "No"}
                    </div>
                    <div>
                      <strong>Follow Thumbnail:</strong>{" "}
                      {item.addonDetails?.followThumbnail ? "Yes" : "No"}
                    </div>
                    <div>
                      <strong>Thumbnail Description:</strong> {item.addonDetails?.thumbnailDescription}
                    </div>
                    <div>
                      <strong>Vertical Reformat Goals:</strong>{" "}
                      {item.addonDetails?.verticalReformatGoals}
                    </div>
                    <div>
                      <strong>Vertical Reformat Example Videos:</strong>{" "}
                      <a
                        href={item.addonDetails?.verticalReformatExampleVideos}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.addonDetails?.verticalReformatExampleVideos}
                      </a>
                    </div>
                    <div>
                      <strong>Square Reformat Goals:</strong> {item.addonDetails?.squareReformatGoals}
                    </div>
                    <div>
                      <strong>Square Reformat Examples:</strong>{" "}
                      <a
                        href={item.addonDetails?.squareReformatExamples}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.addonDetails?.squareReformatExamples}
                      </a>
                    </div>
                    <div>
                      <strong>Horizontal Reformat Goals:</strong>{" "}
                      {item.addonDetails?.horizontalReformatGoals}
                    </div>
                    <div>
                      <strong>Horizontal Reformat Example Videos:</strong>{" "}
                      <a
                        href={item.addonDetails?.horizontalReformatExampleVideos}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.addonDetails?.horizontalReformatExampleVideos}
                      </a>
                    </div>
                    <div>
                      <strong>Caption Style:</strong> {item.addonDetails?.captionStyle}
                    </div>
                    <div>
                      <strong>Editing Software:</strong> {item.addonDetails?.editingSoftware}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center mt-4">
        <IconButton onClick={handlePrevGroup} disabled={page <= pagesPerGroup}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={handlePrevPage} disabled={page === 1}>
          <ArrowBackIosNewIcon />
        </IconButton>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((p) => (
          <IconButton
            key={p}
            color={p === page ? "primary" : "default"}
            onClick={() => handlePageClick(p)}
          >
            {p}
          </IconButton>
        ))}
        <IconButton onClick={handleNextPage} disabled={page === pages}>
          <ArrowForwardIosIcon />
        </IconButton>
        <IconButton onClick={handleNextGroup} disabled={page + pagesPerGroup > pages}>
          <SkipNextIcon />
        </IconButton>
      </div>
    </div>
  );
}
