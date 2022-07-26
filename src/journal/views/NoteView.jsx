import { Button, Grid, TextField, Typography } from '@mui/material'
import {SaveOutlined} from '@mui/icons-material'
import React from 'react'
import {ImageGallery} from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>26 Julio, 2022</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{p:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}} /> Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField type='text' variant='filled' fullWidth placeholder='Agrege un titulo' label="Título" sx={{border:'none', mb:1}} />
            <TextField type='text' variant='filled' fullWidth multiline placeholder='Contenido de la nota' minRows={5} />
        </Grid>
        <ImageGallery />
    </Grid>
  )
}
