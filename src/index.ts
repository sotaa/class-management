import { ClassManagement } from "./class-management";

const classManagement = new ClassManagement();

classManagement.start(3000 , 'mongodb://localhost:27017/class-management');