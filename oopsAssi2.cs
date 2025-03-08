 using System;

 class Program{
   class Student {
    public string name ;
    public int RollNo;
     public string course;
     public int age;
   
public Student (string name,int RollNo,string course,int age){

this.name  = name;
this.RollNo = RollNo;
this.course = course;
this.age = age;

 }



   }

  public static void Main (string[] args ){

    Student Stud1 = new Student("Dhruv",1,"CSE",20);

    Console.WriteLine($"Name: {Stud1.name}, RollNumber: {Stud1.RollNo}, Course: {Stud1.course}, Age: {  Stud1.age}.");

   Student Stud2  = new  Student ("Nukhil", 2, "Bsc", 21);

   Console.WriteLine($"Name: { Stud2.name}, RollNumber: { Stud2.RollNo}, Course: { Stud2.course}, Age: {  Stud2.age}.");

   Student Stud3 = new Student ("Sohel" , 3,"Btech ", 21 );

   Console.WriteLine($"Name: {Stud3.name}, RollNumber: {Stud3.RollNo}, Course: {Stud3.course}, Age: {Stud3.age}.");

  }
 }
