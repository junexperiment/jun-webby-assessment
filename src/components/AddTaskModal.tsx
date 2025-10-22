'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { useTaskStore } from '@/stores/taskStore';
import { v4 as uuidv4 } from 'uuid';

const schema = z.object({
  name: z.string().min(1, 'Task name is required'),
  type: z.string().min(1),
  status: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onClose: () => void;
  editingTask: { id: string } & FormData | null;
};

export default function AddTaskModal({ open, onClose, editingTask }: Props) {
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      type: '',
      status: '',
    },
  });

  useEffect(() => {  // Effect to Handle Edit Mode
    if (editingTask) {
      reset({
        name: editingTask.name,
        type: editingTask.type,
        status: editingTask.status,
      });
    } else {
      reset({
        name: '',
        type: '',
        status: '',
      });
    }
  }, [editingTask, reset]);

  const onSubmit = (data: FormData) => {  //this is for the submission Handler
    if (editingTask) {
      updateTask({ id: editingTask.id, ...data });
    } else {
      addTask({ id: uuidv4(), ...data });
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          label="Task Name"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />
        <TextField
          label="Task Type"
          select
          {...register('type')}
          error={!!errors.type}
          helperText={errors.type?.message}
          fullWidth
        >
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Security">Security</MenuItem>
        </TextField>
        <TextField
          label="Task Status"
          select
          {...register('status')}
          error={!!errors.status}
          helperText={errors.status?.message}
          fullWidth
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          {editingTask ? 'Update Task' : '+ Create Task'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}