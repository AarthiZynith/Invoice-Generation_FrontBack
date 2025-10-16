// import React, { useState } from "react";
 
// import {
 
//   Box,
 
//   Typography,
 
//   TextField,
 
//   Button,
 
//   Dialog,
 
//   DialogTitle,
 
//   DialogContent,
 
//   DialogActions,
 
//   MenuItem,
 
//   Chip,
 
//   Table,
 
//   TableBody,
 
//   TableCell,
 
//   TableHead,
 
//   TableRow,
 
//   Paper,
 
// } 
// from "@mui/material";
 
// import AddIcon from "@mui/icons-material/Add";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
 

// const typeOptions = ["Income", "Expense"];
 
// const categoryOptions = [
 
//   "Salary",
 
//   "Project Revenue",
 
//   "Operations",
 
//   "Equipment",
 
//   "Service Revenue",
 
//   "Marketing",
 
//   "Product Revenue",
 
// ];
 
// const InOutTransactions = () => {
 
//   const [transactions, setTransactions] = useState([
 
//     {
 
//       date: "15/7/2024",
 
//       description: "Monthly Salary Payment - Engineering Team",
 
//       category: "Salary",
 
//       amount: 125000,
 
//       type: "Expense",
 
//     },
 
//     {
 
//       date: "14/7/2024",
 
//       description: "Client Project Payment - ABC Corp",
 
//       category: "Project Revenue",
 
//       amount: 450000,
 
//       type: "Income",
 
//     },
 
//     {
 
//       date: "13/7/2024",
 
//       description: "Office Rent - July 2024",
 
//       category: "Operations",
 
//       amount: 85000,
 
//       type: "Expense",
 
//     },
 
//     {
 
//       date: "12/7/2024",
 
//       description: "New Laptop Purchase - Development Team",
 
//       category: "Equipment",
 
//       amount: 32000,
 
//       type: "Expense",
 
//     },
 
//     {
 
//       date: "11/7/2024",
 
//       description: "Consulting Services - XYZ Ltd",
 
//       category: "Service Revenue",
 
//       amount: 280000,
 
//       type: "Income",
 
//     },
 
//     {
 
//       date: "10/7/2024",
 
//       description: "Marketing Campaign - Q3",
 
//       category: "Marketing",
 
//       amount: 45000,
 
//       type: "Expense",
 
//     },
 
//     {
 
//       date: "9/7/2024",
 
//       description: "Software License Renewal",
 
//       category: "Operations",
 
//       amount: 15000,
 
//       type: "Expense",
 
//     },
 
//     {
 
//       date: "8/7/2024",
 
//       description: "Product Sales - Online Store",
 
//       category: "Product Revenue",
 
//       amount: 120000,
 
//       type: "Income",
 
//     },
 
//   ]);
 
//   const [open, setOpen] = useState(false);
 
//   const [newTransaction, setNewTransaction] = useState({
 
//     description: "",
 
//     amount: "",
 
//     type: "",
 
//     category: "",
 
//   });
 
//   const [filterType, setFilterType] = useState("");
 
//   const [filterCategory, setFilterCategory] = useState("");
 
//   const [search, setSearch] = useState("");
 
//   const handleAddTransaction = () => {
 
//     const newEntry = {
 
//       ...newTransaction,
 
//       date: new Date().toLocaleDateString("en-GB"), // e.g. 01/09/2025
 
//       amount: parseFloat(newTransaction.amount),
 
//     };
 
//     setTransactions([newEntry, ...transactions]);
 
//     setNewTransaction({ description: "", amount: "", type: "", category: "" });
 
//     setOpen(false);
 
//   };
 
//   const totalIncome = transactions
 
//     .filter((t) => t.type === "Income")
 
//     .reduce((sum, t) => sum + t.amount, 0);
 
//   const totalExpenses = transactions
 
//     .filter((t) => t.type === "Expense")
 
//     .reduce((sum, t) => sum + t.amount, 0);
 
//   const filtered = transactions.filter((t) => {
 
//     return (
 
//       (filterType === "" || t.type === filterType) &&
 
//       (filterCategory === "" || t.category === filterCategory) &&
 
//       t.description.toLowerCase().includes(search.toLowerCase())
 
//     );
 
//   });
 
//   return (
// <Box sx={{ p: 4 }}>
// <Typography variant="h4" gutterBottom>
 
//         Transactions
// </Typography>
// <Typography variant="subtitle1" gutterBottom>
 
//         Track all income and expense transactions
// </Typography>
 
// {/* Summary */}
// <Box sx={{ display: "flex", gap: 3, mb: 3, justifyContent: "center" }}>
// <Box
 
//     sx={{
 
//       backgroundColor: "#e6f4ea",
 
//       p: 2,
 
//       borderRadius: 2,
 
//       flex: 1,
 
//       display: "flex",
 
//       alignItems: "center",
 
//       gap: 2,
 
//       minWidth: 180,
 
//     }}
// >
// <ArrowUpwardIcon sx={{ color: "#34a853", fontSize: 32 }} />
// <Box>
// <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
 
//         Total Income
// </Typography>
// <Typography variant="h6" sx={{ color: "#188038", fontWeight: "bold" }}>
 
//         ₹{totalIncome.toLocaleString()}
// </Typography>
// </Box>
// </Box>
 
//   <Box
 
//     sx={{
 
//       backgroundColor: "#fdecea",
 
//       p: 2,
 
//       borderRadius: 2,
 
//       flex: 1,
 
//       display: "flex",
 
//       alignItems: "center",
 
//       gap: 2,
 
//       minWidth: 180,
 
//     }}
// >
// <ArrowDownwardIcon sx={{ color: "#d93025", fontSize: 32 }} />
// <Box>
// <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
 
//         Total Expenses
// </Typography>
// <Typography variant="h6" sx={{ color: "#d93025", fontWeight: "bold" }}>
 
//         ₹{totalExpenses.toLocaleString()}
// </Typography>
// </Box>
// </Box>
 
//   <Box
 
//     sx={{
 
//       backgroundColor: "#e8f0fe",
 
//       p: 2,
 
//       borderRadius: 2,
 
//       flex: 1,
 
//       display: "flex",
 
//       alignItems: "center",
 
//       gap: 2,
 
//       minWidth: 180,
 
//     }}
// >
// <CalendarTodayIcon sx={{ color: "#1a73e8", fontSize: 32 }} />
// <Box>
// <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
 
//         Net Income
// </Typography>
// <Typography variant="h6" sx={{ color: "#188038", fontWeight: "bold" }}>
 
//         ₹{(totalIncome - totalExpenses).toLocaleString()}
// </Typography>
// </Box>
// </Box>
// </Box>
 
//       {/* Filters */}
// <Box
 
//         sx={{
 
//           display: "flex",
 
//           justifyContent: "space-between",
 
//           alignItems: "center",
 
//           mb: 2,
 
//         }}
// >
// <Typography variant="h6">Transaction History</Typography>
 
//         <Button
 
//           variant="contained"
 
//           startIcon={<AddIcon />}
 
//           onClick={() => setOpen(true)}
// >
 
//           Add Transaction
// </Button>
// </Box>
 
//       {/* Search and dropdowns */}
// <Box
 
//         sx={{
 
//           display: "flex",
 
//           gap: 2,
 
//           mb: 2,
 
//           flexWrap: "wrap",
 
//         }}
// >
// <TextField
 
//           fullWidth
//           size="small"
 
//           label="Search transactions"
 
//           variant="outlined"
 
//           value={search}
 
//           onChange={(e) => setSearch(e.target.value)}
//           sx={{ flex: 2, minWidth: "200px" }}
 
//         />
// <TextField
 
//           select
//           fullWidth
 
//           size="small"
 
//           label="Type"
 
//           value={filterType}
 
//           onChange={(e) => setFilterType(e.target.value)}
//           sx={{ flex: 1, minWidth: "160px" }}
// >
// <MenuItem value="">All Types</MenuItem>
 
//           {typeOptions.map((type) => (
// <MenuItem key={type} value={type}>
 
//               {type}
// </MenuItem>
 
//           ))}
// </TextField>
// <TextField
 
//           select
//           fullWidth
 
//           size="small"
 
//           label="Category"
 
//           value={filterCategory}
 
//           onChange={(e) => setFilterCategory(e.target.value)}
//           sx={{ flex: 1, minWidth: "180px" }}
// >
// <MenuItem value="">All Categories</MenuItem>
 
//           {categoryOptions.map((cat) => (
// <MenuItem key={cat} value={cat}>
 
//               {cat}
// </MenuItem>
 
//           ))}
// </TextField>
// </Box>
 
//       {/* Table */}
// <Paper elevation={2}>
// <Table>
// <TableHead>
// <TableRow>
// <TableCell>Date</TableCell>
// <TableCell>Description</TableCell>
// <TableCell>Category</TableCell>
// <TableCell>Amount</TableCell>
// <TableCell>Type</TableCell>
// </TableRow>
// </TableHead>
// <TableBody>
 
//             {filtered.map((t, index) => (
// <TableRow key={index}>
// <TableCell>{t.date}</TableCell>
// <TableCell>{t.description}</TableCell>
// <TableCell>
// <Chip label={t.category} size="small" />
// </TableCell>
// <TableCell style={{ color: t.type === "Income" ? "green" : "red" }}>
 
//                   {t.type === "Income" ? "+" : "-"}₹{t.amount.toLocaleString()}
// </TableCell>
// <TableCell>
// <Chip
 
//                     label={t.type}
 
//                     color={t.type === "Income" ? "success" : "error"}
 
//                     size="small"
 
//                   />
// </TableCell>
// </TableRow>
 
//             ))}
// </TableBody>
// </Table>
// </Paper>
 
//       {/* Dialog */}
// <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
// <DialogTitle>Add New Transaction</DialogTitle>
// <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
// <TextField
 
//             label="Description"
 
//             value={newTransaction.description}
 
//             onChange={(e) =>
 
//               setNewTransaction({ ...newTransaction, description: e.target.value })
 
//             }
 
//           />
// <TextField
 
//             label="Amount"
 
//             type="number"
 
//             value={newTransaction.amount}
 
//             onChange={(e) =>
 
//               setNewTransaction({ ...newTransaction, amount: e.target.value })
 
//             }
 
//           />
// <TextField
 
//             select
 
//             label="Type"
 
//             value={newTransaction.type}
 
//             onChange={(e) =>
 
//               setNewTransaction({ ...newTransaction, type: e.target.value })
 
//             }
// >
 
//             {typeOptions.map((type) => (
// <MenuItem key={type} value={type}>
 
//                 {type}
// </MenuItem>
 
//             ))}
// </TextField>
// <TextField
 
//             select
 
//             label="Category"
 
//             value={newTransaction.category}
 
//             onChange={(e) =>
 
//               setNewTransaction({ ...newTransaction, category: e.target.value })
 
//             }
// >
 
//             {categoryOptions.map((cat) => (
// <MenuItem key={cat} value={cat}>
 
//                 {cat}
// </MenuItem>
 
//             ))}
// </TextField>
// </DialogContent>
// <DialogActions>
// <Button onClick={() => setOpen(false)}>Cancel</Button>
// <Button variant="contained" onClick={handleAddTransaction}>
 
//             Add Transaction
// </Button>
// </DialogActions>
// </Dialog>
// </Box>
 
//   );
 
// };
 
// export default InOutTransactions;






import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Alert,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";

const typeOptions = ["Income", "Expense"];
const categoryOptions = [
  "Salary",
  "Project Revenue",
  "Operations",
  "Equipment",
  "Service Revenue",
  "Marketing",
  "Product Revenue",
];

const InOutTransactions = () => {
  // Sample data with remarks and attachments
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "15/7/2024",
      description: "Monthly Salary Payment - Engineering Team",
      category: "Salary",
      amount: 125000,
      type: "Expense",
      remarks: "Paid via bank transfer to 15 employees including basic salary, HRA, and special allowances. Processed through HDFC bank net banking.",
      attachment: "salary_receipt_july.pdf",
    },
    {
      id: 2,
      date: "14/7/2024",
      description: "Client Project Payment - ABC Corp",
      category: "Project Revenue",
      amount: 450000,
      type: "Income",
      remarks: "Final payment for website development project - Project Phoenix. Includes frontend, backend, and deployment services.",
      attachment: "invoice_abc_corp.pdf",
    },
    {
      id: 3,
      date: "13/7/2024",
      description: "Office Rent - July 2024",
      category: "Operations",
      amount: 85000,
      type: "Expense",
      remarks: "Monthly office rent for Tech Park building, Floor 5, including maintenance charges and parking facilities.",
      attachment: "rent_receipt_july.jpg",
    },
    {
      id: 4,
      date: "12/7/2024",
      description: "New Laptop Purchase - Development Team",
      category: "Equipment",
      amount: 32000,
      type: "Expense",
      remarks: "3 Dell Latitude 5430 laptops for new developers with 16GB RAM, 512GB SSD, and 3-year premium support.",
      attachment: "laptop_invoice.pdf",
    },
    {
      id: 5,
      date: "11/7/2024",
      description: "Consulting Services - XYZ Ltd",
      category: "Service Revenue",
      amount: 280000,
      type: "Income",
      remarks: "Cloud migration consulting services for AWS infrastructure. Completed migration of 15 servers with zero downtime.",
      attachment: null,
    },
    {
      id: 6,
      date: "10/7/2024",
      description: "Marketing Campaign - Q3",
      category: "Marketing",
      amount: 45000,
      type: "Expense",
      remarks: "Digital marketing campaign for new product launch including Google Ads, social media marketing, and influencer collaborations.",
      attachment: "marketing_budget.xlsx",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
    type: "",
    category: "",
    remarks: "",
    attachment: null,
  });
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Open detail view modal
  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setDetailModalOpen(true);
  };

  // Close detail view modal
  const handleCloseDetailModal = () => {
    setDetailModalOpen(false);
    setSelectedTransaction(null);
  };

  // Simulate file download
  const handleDownloadAttachment = (fileName, transactionDescription) => {
    if (fileName) {
      alert(`📥 Downloading Attachment\n\nFile: ${fileName}\nTransaction: ${transactionDescription}\n\nIn a real application, this would download the file.`);
    }
  };

  const handleAddTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount || !newTransaction.type || !newTransaction.category) {
      alert("Please fill in all required fields: Description, Amount, Type, and Category");
      return;
    }

    const newEntry = {
      id: Date.now(),
      ...newTransaction,
      date: new Date().toLocaleDateString("en-GB"),
      amount: parseFloat(newTransaction.amount),
    };

    setTransactions([newEntry, ...transactions]);
    setSuccessMessage("Transaction added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    
    setNewTransaction({ 
      description: "", 
      amount: "", 
      type: "", 
      category: "", 
      remarks: "",
      attachment: null 
    });
    setOpen(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx', '.xlsx'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        alert('Please select a valid file type: PDF, JPG, PNG, DOC, DOCX, XLSX');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setNewTransaction({
        ...newTransaction,
        attachment: file.name
      });
    }
  };

  const handleViewAttachment = (fileName, transactionDescription) => {
    if (fileName) {
      alert(`📎 Attachment Preview\n\nFile: ${fileName}\nTransaction: ${transactionDescription}\n\nIn a real application, this would:\n• Open PDF/Images in viewer\n• Download documents\n• Show file preview`);
    }
  };

  const handleDeleteAttachment = (transactionId) => {
    setTransactions(transactions.map(t => 
      t.id === transactionId ? { ...t, attachment: null } : t
    ));
  };

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // Filter transactions
  const filtered = transactions.filter((t) => {
    return (
      (filterType === "" || t.type === filterType) &&
      (filterCategory === "" || t.category === filterCategory) &&
      (t.description.toLowerCase().includes(search.toLowerCase()) ||
       (t.remarks && t.remarks.toLowerCase().includes(search.toLowerCase())))
    );
  });

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Transactions
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Track all income and expense transactions with receipts
      </Typography>

      {/* Success Message */}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}

      {/* Summary Cards */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, justifyContent: "center" }}>
        <Box sx={{ backgroundColor: "#e6f4ea", p: 2, borderRadius: 2, flex: 1, display: "flex", alignItems: "center", gap: 2, minWidth: 180 }}>
          <ArrowUpwardIcon sx={{ color: "#34a853", fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Total Income</Typography>
            <Typography variant="h6" sx={{ color: "#188038", fontWeight: "bold" }}>₹{totalIncome.toLocaleString()}</Typography>
          </Box>
        </Box>
        
        <Box sx={{ backgroundColor: "#fdecea", p: 2, borderRadius: 2, flex: 1, display: "flex", alignItems: "center", gap: 2, minWidth: 180 }}>
          <ArrowDownwardIcon sx={{ color: "#d93025", fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Total Expenses</Typography>
            <Typography variant="h6" sx={{ color: "#d93025", fontWeight: "bold" }}>₹{totalExpenses.toLocaleString()}</Typography>
          </Box>
        </Box>
        
        <Box sx={{ backgroundColor: "#e8f0fe", p: 2, borderRadius: 2, flex: 1, display: "flex", alignItems: "center", gap: 2, minWidth: 180 }}>
          <CalendarTodayIcon sx={{ color: "#1a73e8", fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Net Income</Typography>
            <Typography variant="h6" sx={{ color: "#188038", fontWeight: "bold" }}>₹{(totalIncome - totalExpenses).toLocaleString()}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Filters and Add Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6">Transaction History ({filtered.length} records)</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          Add Transaction
        </Button>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        <TextField
          fullWidth
          size="small"
          label="Search transactions or remarks"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 2, minWidth: "200px" }}
        />
        <TextField
          select
          fullWidth
          size="small"
          label="Type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          sx={{ flex: 1, minWidth: "160px" }}
        >
          <MenuItem value="">All Types</MenuItem>
          {typeOptions.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          size="small"
          label="Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ flex: 1, minWidth: "180px" }}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categoryOptions.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Table with Clickable Rows */}
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Attachment</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((t) => (
              <TableRow 
                key={t.id} 
                hover 
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
                onClick={() => handleViewDetails(t)}
              >
                <TableCell>{t.date}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {t.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={t.category} 
                    size="small" 
                    color={t.type === "Income" ? "success" : "default"}
                  />
                </TableCell>
                <TableCell style={{ 
                  color: t.type === "Income" ? "green" : "red",
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  {t.type === "Income" ? "" : ""}₹{t.amount.toLocaleString()}
                </TableCell>
                <TableCell>
                  {t.remarks ? (
                    <Tooltip title={t.remarks} arrow placement="top-start">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <DescriptionIcon fontSize="small" color="action" />
                        <Typography variant="body2" sx={{ 
                          maxWidth: 150, 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap' 
                        }}>
                          {t.remarks}
                        </Typography>
                      </Box>
                    </Tooltip>
                  ) : (
                    <Typography variant="body2" color="textSecondary" fontStyle="italic">
                      No remarks
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  {t.attachment ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Tooltip title="View Attachment" arrow>
                        <IconButton 
                          size="small" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewAttachment(t.attachment, t.description);
                          }}
                          color="primary"
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Typography variant="body2" sx={{ fontSize: '0.75rem', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.attachment}
                      </Typography>
                      <Tooltip title="Remove Attachment" arrow>
                        <IconButton 
                          size="small" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteAttachment(t.id);
                          }}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  ) : (
                    <Typography variant="body2" color="textSecondary" fontStyle="italic">
                      No file
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Chip
                    label={t.type}
                    color={t.type === "Income" ? "success" : "error"}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="View Details" arrow>
                    <IconButton 
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(t);
                      }}
                      color="primary"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Add Transaction Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AddIcon />
            Add New Transaction
          </Box>
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Description *"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
            fullWidth
            required
          />
          <TextField
            label="Amount *"
            type="number"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
            fullWidth
            required
            InputProps={{ startAdornment: '₹' }}
          />
          <TextField
            select
            label="Type *"
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
            fullWidth
            required
          >
            {typeOptions.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Category *"
            value={newTransaction.category}
            onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
            fullWidth
            required
          >
            {categoryOptions.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Remarks"
            value={newTransaction.remarks}
            onChange={(e) => setNewTransaction({ ...newTransaction, remarks: e.target.value })}
            fullWidth
            multiline
            rows={2}
            placeholder="Add any additional notes, comments, or details about this transaction..."
          />
          
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Attach Receipt (Optional)
            </Typography>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="attachment-upload"
            />
            <label htmlFor="attachment-upload">
              <Button 
                variant="outlined" 
                component="span" 
                startIcon={<AttachFileIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                {newTransaction.attachment ? `📎 ${newTransaction.attachment}` : 'Choose file (PDF, Image, Document)'}
              </Button>
            </label>
            {newTransaction.attachment && (
              <Typography variant="caption" color="success.main" sx={{ mt: 1, display: 'block' }}>
                ✅ File selected: {newTransaction.attachment}
              </Typography>
            )}
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block' }}>
              Max file size: 5MB • Supported: PDF, JPG, PNG, DOC, XLSX
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleAddTransaction}
            disabled={!newTransaction.description || !newTransaction.amount || !newTransaction.type || !newTransaction.category}
          >
            Add Transaction
          </Button>
        </DialogActions>
      </Dialog>

      {/* Transaction Detail View Modal */}
      <Dialog 
        open={detailModalOpen} 
        onClose={handleCloseDetailModal} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 24
          }
        }}
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DescriptionIcon color="primary" />
              Transaction Details
            </Typography>
            <IconButton onClick={handleCloseDetailModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1 }}>
            Read Only - No editing allowed
          </Typography>
        </DialogTitle>
        
        <DialogContent>
          {selectedTransaction && (
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                  {/* Left Column */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Date
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {selectedTransaction.date}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Description
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {selectedTransaction.description}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Category
                      </Typography>
                      <Chip 
                        label={selectedTransaction.category} 
                        color={selectedTransaction.type === "Income" ? "success" : "default"}
                        size="small"
                      />
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Type
                      </Typography>
                      <Chip
                        label={selectedTransaction.type}
                        color={selectedTransaction.type === "Income" ? "success" : "error"}
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </Box>

                  {/* Right Column */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Amount
                      </Typography>
                      <Typography 
                        variant="h5" 
                        fontWeight="bold"
                        color={selectedTransaction.type === "Income" ? "success.main" : "error.main"}
                      >
                        {selectedTransaction.type === "Income" ? "" : ""}₹{selectedTransaction.amount.toLocaleString()}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Attachment
                      </Typography>
                      {selectedTransaction.attachment ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <AttachFileIcon fontSize="small" color="primary" />
                          <Typography variant="body2" sx={{ flex: 1 }}>
                            {selectedTransaction.attachment}
                          </Typography>
                          <Tooltip title="Download Attachment">
                            <IconButton 
                              size="small" 
                              onClick={() => handleDownloadAttachment(selectedTransaction.attachment, selectedTransaction.description)}
                              color="primary"
                            >
                              <DownloadIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      ) : (
                        <Typography variant="body2" color="textSecondary" fontStyle="italic">
                          No attachment
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Remarks Section */}
                <Box>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Remarks
                  </Typography>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2, 
                      backgroundColor: 'grey.50',
                      minHeight: 80
                    }}
                  >
                    <Typography variant="body2">
                      {selectedTransaction.remarks || "No remarks provided"}
                    </Typography>
                  </Paper>
                </Box>
              </CardContent>
            </Card>
          )}
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            variant="contained" 
            onClick={handleCloseDetailModal}
            fullWidth
            size="large"
          >
            Close Details
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InOutTransactions;