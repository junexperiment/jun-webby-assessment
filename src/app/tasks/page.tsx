'use client';
import { Box, Typography, Button, Chip, IconButton } from '@mui/material';
import { useTaskStore } from '@/stores/taskStore';
import { useState } from 'react';
import AddTaskModal from '@/components/AddTaskModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TasksPage() {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddClick = () => {
    setEditingTask(null); // New task
    setOpen(true);
  };

  const handleEditClick = (task) => {
    setEditingTask(task); // Existing task
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Show the full-width Header */}
      <Box
        sx={{
          border: '2px solid #1976d2',
          borderRadius: 2,
          padding: 2,
          backgroundColor: '#0d47a1',
          color: '#e3f2fd',
        }}
      >
        <Typography variant="h2">Task Tracker</Typography>
      </Box>

      {/* To Add Task Button Below Header */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          + Add Task
        </Button>
      </Box>

      {/* For Modal */}
      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        editingTask={editingTask}
      />

      {/* For the Task List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tasks.length === 0 ? (
          <Typography variant="body1" sx={{ color: '#bbdefb' }}>
            No tasks yet. Click “+ Add Task” to get started!
          </Typography>
        ) : (
          tasks.map((task) => (
            <Box
              key={task.id}
              sx={{
                backgroundColor: '#0d47a1',
                p: 2,
                borderRadius: 2,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                color: '#e3f2fd',
              }}
            >
              <Typography variant="h6">{task.name}</Typography>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label={task.type} color="primary" />
                <Chip
                  label={task.status}
                  color={
                    task.status === 'Pending'
                      ? 'warning'
                      : task.status === 'In Progress'
                      ? 'info'
                      : 'success'
                  }
                />
              </Box>

              <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                <IconButton size="small" color="info" onClick={() => handleEditClick(task)}>
                  <EditIcon />
                </IconButton>
                <IconButton size="small" color="error" onClick={() => deleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}