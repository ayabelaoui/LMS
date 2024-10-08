import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from 'src/app/shared/models/leaverequest.module';
import { pendingLeaveRequests } from 'src/app/shared/models/pendingLeaveRequests.module';
import { LeaveRequestDTOResponse } from 'src/app/shared/models/LeaveRequestDTOResponse';
import { leaveRequestDetails } from 'src/app/shared/models/leaveRequestDetails';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private baseUrl = 'http://localhost:8080/api/leaverequests'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getLeaveRequestsByUserId(leaveRequestId: number): Observable<leaveRequestDetails> {
    const url = `${this.baseUrl}/histo/${leaveRequestId}`;
    return this.http.get<leaveRequestDetails>(url);
  }

  getPendingLeaveRequestsByUserId(userId: number): Observable<pendingLeaveRequests[]> {
    return this.http.get<pendingLeaveRequests[]>(` ${this.baseUrl}/pending/${userId}`);
  }
  createLeaveRequest(leaveRequestData: LeaveRequest): Observable<any> {
    const url = `${this.baseUrl}/create`; // Remplacez 'create' par l'URL de votre endpoint de création
    return this.http.post(url, leaveRequestData);
  }
  getAllLeaveRequestsForCurrentUser(): Observable<pendingLeaveRequests[]> {
    return this.http.get<pendingLeaveRequests[]>(`${this.baseUrl}/user`);
  }
  getLeaveRequestById(leaveRequestId: number): Observable<leaveRequestDetails> {
    const url = `${this.baseUrl}/${leaveRequestId}`;
    return this.http.get<leaveRequestDetails>(url);
  }

  getPendingLeaveRequests(): Observable<pendingLeaveRequests[]> {
    return this.http.get<pendingLeaveRequests[]>(`${this.baseUrl}/pending`);
  }

  validateLeaveRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/validate/${requestId}`, {});
  }

  rejectLeaveRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reject/${requestId}`, {});
  }

  cancelLeaveRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/cancel/${requestId}`, {});
  }
}
