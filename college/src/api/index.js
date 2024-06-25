import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchCourses = () => API.get('/api/courses');
export const createCourse = (newCourse) => API.post('/api/courses', newCourse);
