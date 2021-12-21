using Newtonsoft.Json;
using WebApi;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

List<Drivers> jsonObject = new List<Drivers>();
List<News> jsonObject2 = new List<News>();


var app = builder.Build();


app.MapGet("/Drivers", () => {
    jsonObject = JsonConvert.DeserializeObject<List<Drivers>>(File.ReadAllText(@"C:\Users\Vande\Documents\MobileIoT2\Angular\Backend\drivers.json"));
    return jsonObject;
});

app.MapGet("/News", () => {
    jsonObject2 = JsonConvert.DeserializeObject<List<News>>(File.ReadAllText(@"C:\Users\Vande\Documents\MobileIoT2\Angular\Backend\news.json"));
    return jsonObject2;
});


app.MapGet("/", () => "Service is up and running");

app.UseCorsMiddleWare();

app.Run();

public class Drivers
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string team { get; set; }
    public string number { get; set; }
    public string img { get; set; }
}

public class News
{
    public string title { get; set; }
    public string subTitle { get; set; }
    public string text { get; set; }
    public string img { get; set; }
    public string alt { get; set; }
}
