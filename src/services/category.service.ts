import http from "../api/http-common";
import ICategoryData from "../models/category.model";

class TutorialDataService {
    getAll() {
      return http.get<Array<ICategoryData>>("/categories");
    }
  
    get(id: string) {
      return http.get<ICategoryData>(`/categories/${id}`);
    }
  
    create(data: ICategoryData) {
      return http.post<ICategoryData>("/categories", data);
    }
  
    update(data: ICategoryData, id: any) {
      return http.put<any>(`/categories/${id}`, data);
    }
  
    delete(id: any) {
      return http.delete<any>(`/categories/${id}`);
    }
  
    deleteAll() {
      return http.delete<any>(`/categories`);
    }
  
    findByTitle(title: string) {
      return http.get<Array<ICategoryData>>(`/categories?title=${title}`);
    }
  }
  
  export default new TutorialDataService();