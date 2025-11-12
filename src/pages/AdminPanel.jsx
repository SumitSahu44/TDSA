// pages/AdminPanel.jsx
import React, { useState } from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import CourseForm from '../components/admin/CourseForm';
import CourseList from '../components/admin/CourseList';

// Mock initial data
const initialCourses = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    price: 12999,
    comparePrice: 24999,
    description: "Master ML with real projects",
    category: "Machine Learning",
    duration: "12 weeks",
    thumbnail: "https://via.placeholder.com/400x300.png?text=ML+Course",
    syllabus: "ml-syllabus.pdf"
  }
];

const AdminPanel = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleSave = (courseData) => {
    if (editingCourse) {
      setCourses(courses.map(c => c.id === editingCourse.id ? { ...courseData, id: c.id } : c));
    } else {
      setCourses([...courses, courseData]);
    }
    setShowForm(false);
    setEditingCourse(null);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-white">Manage Courses</h1>
          <button
            onClick={() => { setShowForm(true); setEditingCourse(null); }}
            className="px-8 py-3 bg-gradient-to-r from-[#D22D1E] via-[#963AB0] to-[#20469B] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-600/50 transition"
          >
            + Add New Course
          </button>
        </div>

        {showForm ? (
          <CourseForm
            course={editingCourse}
            onSave={handleSave}
            onCancel={() => { setShowForm(false); setEditingCourse(null); }}
          />
        ) : (
          <CourseList courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPanel;