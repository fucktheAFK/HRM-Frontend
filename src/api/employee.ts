import axios from 'axios'
import type { Employee } from '@/types/employee'

interface SalaryDetail {
  base: number
  performance: number
  overtime: number
  attendance: number
  insurance: number
  tax: number
}

interface AttendanceRecord {
  date: string
  status: 'normal' | 'late' | 'early' | 'absent'
  statusText: string
  checkIn: string
  checkOut: string
}

const api = axios.create({
  baseURL: '/api'
})

export const fetchEmployees = () => {
  return api.get<Employee[]>('/employees')
}

export const getEmployee = (id: number) => {
  return api.get<Employee>(`/employees/${id}`)
}

export const deleteEmployee = (id: number) => {
  return api.delete(`/employees/${id}`)
}

export const updateEmployee = (employee: Employee) => {
  return api.put<Employee>(`/employees/${employee.id}`, employee)
}

export const addEmployee = (employee: Omit<Employee, 'id'>) => {
  return api.post<Employee>('/employees', employee)
}

export const getProfile = (id: number) => {
  return api.get<Employee>(`/employees/${id}/profile`)
}

export const updateProfile = (profile: Employee) => {
  return api.put<Employee>(`/employees/${profile.id}/profile`, profile)
}

export const getEmployeeSalary = (id: number) => {
  return api.get<SalaryDetail>(`/employees/${id}/salary`)
}

export const getAttendance = (id: number) => {
  return api.get<AttendanceRecord[]>(`/employees/${id}/attendance`)
}

export type { Employee, SalaryDetail, AttendanceRecord }
