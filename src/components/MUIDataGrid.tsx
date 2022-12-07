import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { RegisterAportesWindowStyles as styles } from '../Styles';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'year',
    headerName: 'Año',
    editable: false,
  },
  {
    field: 'month',
    headerName: 'Mes',
    editable: false,
  },
  {
    field: 'value',
    headerName: 'Monto',
    type: 'number',
    editable: false,
  },
  {
    field: 'version',
    headerName: 'Version',
    type: 'number',
    editable: false,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, year: 2022, month: 1, value: 35, version: 1 },
  { id: 2, year: 2022, month: 2, value: 42, version: 1 },
  { id: 3, year: 2022, month: 3, value: 45, version: 1 },
  { id: 4, year: 2022, month: 4, value: 16, version: 1 },
  { id: 5, year: 2022, month: 5, value: 12, version: 1 },
  { id: 6, year: 2022, month: 6, value: 150, version: 1 },
  { id: 7, year: 2022, month: 7, value: 44, version: 1 },
  { id: 8, year: 2022, month: 8, value: 36, version: 1},
  { id: 9, year: 2022, month: 9, value: 65, version: 1},
];

export default function MUIDataGrid() {
  return (
    <Box sx={styles.datagrid}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}