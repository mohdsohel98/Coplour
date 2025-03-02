

using System;
using System.Security.Cryptography.X509Certificates;


class Student{
 public String name;
 public int rollno;
 public String course;
 public int age;


public Student (String name, int rollno, String course, int age){

  this.name  = name;
  this.rollno = rollno;
  this.course = course;
  this.age = age;

}


public void ShowDetail(){
  Console.WriteLine("name is = "+this.name);
  Console.WriteLine("Roll-Number is ="+ this.rollno);
  Console.WriteLine("Course =  "+ this.course);
  Console.WriteLine( " Age is  = "+this.age);
}


}


 class main{
  public static void Main(){

 Student s1 = new Student("Ali", 1, "btech", 20);
Student s2  = new Student ("nitin",2,"bsc",21);

s1.ShowDetail();
s2.ShowDetail();


  }
 }