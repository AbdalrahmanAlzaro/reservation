// import * as React from "react";
// import dayjs from "dayjs";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#ffffff",
//     },
//   },
// });

// export default function DatePickerValue() {
//   const [value, setValue] = React.useState(dayjs("2022-04-17"));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <ThemeProvider theme={theme}>
//         <DemoContainer components={["DatePicker", "DatePicker"]}>
//           <DatePicker
//             label="Controlled picker"
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//         </DemoContainer>
//       </ThemeProvider>
//     </LocalizationProvider>
//   );
// }
