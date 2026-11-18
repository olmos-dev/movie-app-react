import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { XCircleIcon } from '@heroicons/react/24/outline'

const fallbackStyle = {
  width: '100%',
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#334155',
  borderRadius: 8,
  marginBottom: 16,
  color: '#f8fafc',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0 16px',
}

export default function ModalCardMovie({ movie, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box sx={{ position: 'relative' }}>
        <DialogTitle sx={{ textAlign: 'center', pr: 6 }}>
          {movie?.title}
        </DialogTitle>
        <IconButton
          onClick={onClose}
          aria-label="Cerrar modal"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#0284c7',
          }}
        >
          <XCircleIcon width={24} height={24} />
        </IconButton>
      </Box>

      <DialogContent>
        {movie?.poster ? (
          <img
            src={movie.poster}
            alt={`Póster de ${movie.title}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 8,
              marginBottom: 16,
            }}
          />
        ) : (
          <div style={fallbackStyle}>Sin póster</div>
        )}

        <DialogContentText
          className="movie-meta"
          sx={{ textAlign: 'center', mb: 1 }}
        >
          {movie?.year} · {movie?.genre}
        </DialogContentText>

        <DialogContentText sx={{ textAlign: 'justify', mb: 1 }}>
          {movie?.description}
        </DialogContentText>

        <DialogContentText sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          ⭐ {movie?.rating}
        </DialogContentText>
      </DialogContent>

    </Dialog>
  )
}