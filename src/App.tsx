import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import MUIDataGrid from './components/MUIDataGrid';
import { RegisterAportesWindowStyles as styles } from "./Styles";

interface IFormInputs {
	fecha: Date | null
	monto: number
}

function App() {
	//const [value, setValue] = React.useState<Dayjs | null>(null);
	const { handleSubmit, control, register, setValue  } = useForm<IFormInputs>();
	const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

  return (
	<>
		{/* <ResponsiveAppBar /> */}
		<div style={styles.container}>
			<h1 style={styles.title}>Cálculo de los Aportes</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="fecha"
					control={control}
					rules={{ required: true }}
					render={() => 
					
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						{/* @ts-ignore */}
						<DatePicker
							{...register("fecha")}
							label="Fecha"
							renderInput={(params) => <TextField sx={styles.textField} {...params} />}
						/>
					</LocalizationProvider>
				}
				/>
				<Controller
					name="monto"
					control={control}
					rules={{ required: true }}
					render={() => 
					
					<TextField
						{...register("monto")}
						sx={styles.textField}
						id="outlined-number"
						label="Number"
						type="number"
						InputLabelProps={{
					  shrink: true,
					}}
				/>
				}
				/>
				<Button sx={styles.button} type="submit" variant="contained" endIcon={<SendIcon />}>
					Entregar
				</Button>
			</form>
			
			<MUIDataGrid />
		</div>
	</>
  );
}

export default App;
