import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Main {
    public static void main(String[] args) {
        System.out.println("Run example aop ...");

        Resource r=new ClassPathResource("beans.xml");
        BeanFactory factory=new XmlBeanFactory(r);

        A a=factory.getBean("proxy",A.class);
        a.m();
    }
}
