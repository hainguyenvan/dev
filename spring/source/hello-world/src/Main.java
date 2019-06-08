import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Main {

  public static void main(String[] args) {
    System.out.println("Run hello world !");
    Resource resource = new ClassPathResource("beans.xml");
    BeanFactory factory = new XmlBeanFactory(resource);

//    Student student = (Student)factory.getBean("student");
//    student.displayInfo();
//
//    Employee employee = (Employee)factory.getBean("employee");
//    employee.show();

    EmployeeAddress employeeAddress = (EmployeeAddress)factory.getBean("employeeAddress");
    employeeAddress.show();
  }
}
