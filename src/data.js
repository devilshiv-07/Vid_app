export const API_KEY = 'AIzaSyC2qkm8OSkU5I8cjub3wnXkCNHJQWJKUZE';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else if(value>=1000000000){
        return Math.floor(value/1000000000)+"B";
    }
    else{
        return value
    }
}