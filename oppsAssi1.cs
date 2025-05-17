 abstract class Logger {

public abstract void Log();
 }

  class Database: Logger{

    public override void Log()
    {
        Console.WriteLine("Database Log");
    }
}

 class File: Logger{
    public override void Log()
    {
        Console.WriteLine("File Log");
    }
}

 class Cloud : Logger {
    public override void Log()
    {
      Console.WriteLine("Cloud  Log");
    }
}

 class Program {
static void Main(){

  Logger loged1= new Database();
  Logger loged2 = new File();
  Logger loged3  = new Cloud();

loged1.Log();
loged2.Log();
loged3.Log();
}
 }
