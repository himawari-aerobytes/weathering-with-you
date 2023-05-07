
class WeatherForecast{
    station? : Station;
    temperature? : Temperature;
    area: Area[] = [];
}

class Station{
    name? : string;
    code? : string;  
}

class Temperature{
    title?: string;
    description? : string;
    dateTime? : Date;

}

class Area{
    name?: string;
    code?: string;
}