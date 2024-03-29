import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://httapi.xyz/place-api/';
  constructor(public http: HttpClient) { }
  //  แสดงข้อมูลทั้งหมด
  viewAllData(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'view-all.php');
  }
 // แสดงข้อมูลตาม pid (detail)
  viewDetailData(dataPost): Observable<any> {
      return this.http.post(this.baseURL + 'view-detail.php', dataPost);
   }
  // ดึงข้อมูลตามเงื่อนไข
  viewData(dataPost): Observable<any> {
    return this.http.post(this.baseURL + 'view.php', dataPost);
 }
 // ค้นหา
   searchData(dataPost): Observable<any> {
     return this.http.post(this.baseURL + 'search.php', dataPost);
  }
 // เพิ่มข้อมูล
 addData(dataPost): Observable<any> {
   return this.http.post(this.baseURL + 'add.php', dataPost);
 }
 // แก้ไขข้อมูล
 updateData(dataPost): Observable<any> {
   return this.http.post(this.baseURL + 'update.php', dataPost);
 }
 // ลบข้อมูล
 deleteData(dataPost): Observable<any> {
   return this.http.post(this.baseURL + 'delete.php', dataPost);
 }
}
