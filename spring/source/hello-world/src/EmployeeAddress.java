public class EmployeeAddress {

  private String name;
  private Address address;
  private Address1 address1;

  public EmployeeAddress(String name, Address address, Address1 address1) {
    this.name = name;
    this.address = address;
    this.address1 = address1;
  }


  public void show() {
    System.out.println("name: " + this.name + " address: " + this.address.toString() + " address1: "
        + this.address1.toString());
  }

}
