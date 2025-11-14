import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

// Define column configurations for the data grid, specifying field names, display names, widths, and styling classes
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    sortable: true,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
    sortable: true,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
];

// Sample data rows representing chorale members with their IDs, names, and roles
const rows = [
  { id: 1, name: "Jefferson Tambis", role: "Vice President" },
  { id: 2, name: "Mikylla Marie Bulan", role: "Secretary" },
  { id: 3, name: "Yme Heriz Arma", role: "Treasurer" },
  { id: 4, name: "Micah Elah Bamba", role: "Auditor" },
  { id: 5, name: "Mark Lester Balcos", role: "Property Custodian" },
  { id: 6, name: "Rainier Delos Santos", role: "Piece Custodian" },
  { id: 7, name: "Elmer Encelan Jr.", role: "Costume Custodian" },
  { id: 8, name: "Granielle Añasco", role: "Costume Custodian" },
  { id: 9, name: "Dave Andrew Gongon", role: "Multimedia Head" },
  { id: 10, name: "Llean Tuesday Tan", role: "Photographer" },
];

// DataTable component renders a Material-UI DataGrid displaying chorale member information
function DataTable() {
  return (
    <Box
      sx={{
        height: 320,
        width: "100%",
        // Custom styling for data grid headers with primary color background and white text
        "& .data-grid-header": {
          backgroundColor: "primary.main",
          color: "white",
          fontWeight: 600,
          fontSize: "0.875rem",
          borderBottom: "none",
        },
        // Styling for data grid cells with subtle borders and hover effects
        "& .data-grid-cell": {
          borderBottom: "1px solid rgba(211, 47, 47, 0.1)",
          fontWeight: 500,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255, 152, 0, 0.1)",
          },
        },
        // Remove default border and set transparent background for the root grid
        "& .MuiDataGrid-root": {
          border: "none",
          borderRadius: 2,
          backgroundColor: "transparent",
        },
        // Add a red border under column headers
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: "2px solid #d32f2f",
        },
        // Add hover effects to rows with slight scaling and background color change
        "& .MuiDataGrid-row": {
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(211, 47, 47, 0.05)",
            transform: "scale(1.01)",
          },
        },
        // Remove focus outlines for better visual consistency
        "& .MuiDataGrid-cell:focus": {
          outline: "none",
        },
        "& .MuiDataGrid-columnHeader:focus": {
          outline: "none",
        },
        // Style the footer container with a subtle border and background
        "& .MuiDataGrid-footerContainer": {
          borderTop: "1px solid rgba(211, 47, 47, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        },
        // Set secondary text color for pagination controls
        "& .MuiTablePagination-root": {
          color: "text.secondary",
        },
      }}
    >
      {/* Render the DataGrid with defined rows and columns, pagination settings */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        disableSelectionOnClick
        hideFooterSelectedRowCount
      />
    </Box>
  );
}

export default DataTable;
